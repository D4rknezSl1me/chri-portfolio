import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 10_000

const LOCALES = ['en', 'it', 'de', 'fr', 'zh', 'hv'] as const
type Locale = (typeof LOCALES)[number]

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
  // Locale of the visitor, so the confirmation reply is in their language.
  locale: z.enum(LOCALES).optional(),
  // Honeypot: must be empty. Bots fill it in.
  company: z.string().max(0).optional().or(z.literal('')),
  // Optional Turnstile token when enabled.
  'cf-turnstile-response': z.string().optional(),
})

// Simple in-memory, per-IP rate limiter. For multi-replica robustness, swap
// for a shared store (e.g. Redis/Upstash). Good enough behind a single tunnel.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // Turnstile not configured — skip.
  if (!token) return false

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  })
  const data = (await res.json()) as { success: boolean }
  return data.success
}

const SENDER_NAME = 'Christian Cangelli'

// Localized auto-reply the sender receives, confirming their message arrived.
// Transactional copy is kept here (not in the UI dictionaries) since it only
// lives server-side. {name} is interpolated.
const CONFIRMATION: Record<Locale, { subject: string; greeting: string; body: string; sign: string }> = {
  en: {
    subject: 'Thanks for reaching out',
    greeting: 'Hi {name},',
    body: "Thanks for getting in touch — your message reached me and I'll get back to you soon. This is an automated confirmation; there's no need to reply.",
    sign: '— Christian',
  },
  it: {
    subject: 'Grazie per avermi scritto',
    greeting: 'Ciao {name},',
    body: 'Grazie per il tuo messaggio — l’ho ricevuto e ti risponderò al più presto. Questa è una conferma automatica, non serve rispondere.',
    sign: '— Christian',
  },
  de: {
    subject: 'Danke für deine Nachricht',
    greeting: 'Hallo {name},',
    body: 'Danke für deine Nachricht — sie ist bei mir angekommen und ich melde mich bald. Dies ist eine automatische Bestätigung, eine Antwort ist nicht nötig.',
    sign: '— Christian',
  },
  fr: {
    subject: 'Merci de m’avoir contacté',
    greeting: 'Bonjour {name},',
    body: 'Merci pour votre message — je l’ai bien reçu et je vous répondrai bientôt. Ceci est une confirmation automatique, inutile d’y répondre.',
    sign: '— Christian',
  },
  zh: {
    subject: '感谢你的来信',
    greeting: '你好 {name}，',
    body: '感谢你的留言——我已经收到，会尽快回复你。这是一封自动确认邮件，无需回复。',
    sign: '— Christian',
  },
  hv: {
    subject: 'Kirimvose udrot',
    greeting: 'Rytsas {name},',
    body: 'Kirimvose ñuhot udrot — jitac, se aderī ji tolī. Bisy nābēmātās mirre, daor ivestragī.',
    sign: '— Christian',
  },
}

type EmailPayload = {
  from: string
  to: string
  subject: string
  text: string
  reply_to?: string
}

async function sendEmail(apiKey: string, payload: EmailPayload): Promise<Response> {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}

async function deliver(
  name: string,
  email: string,
  message: string,
  locale: Locale,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    // Email not wired yet — log server-side so nothing is lost during setup.
    console.info('[contact] (email not configured) message received', { name, email })
    return
  }

  // 1) Notify the owner. This is the one that must succeed.
  const notify = await sendEmail(apiKey, {
    from,
    to,
    reply_to: email,
    subject: `Portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })
  if (!notify.ok) throw new Error('Email delivery failed')

  // 2) Send the sender a confirmation. Best-effort: a bounced auto-reply must
  // never make the visitor think their message failed, so we swallow errors.
  const copy = CONFIRMATION[locale]
  try {
    const confirm = await sendEmail(apiKey, {
      from: `${SENDER_NAME} <${from}>`,
      to: email,
      subject: copy.subject,
      text: `${copy.greeting.replace('{name}', name)}\n\n${copy.body}\n\n${copy.sign}`,
    })
    if (!confirm.ok) {
      console.warn('[contact] confirmation email failed', { email, status: confirm.status })
    }
  } catch (err) {
    console.warn('[contact] confirmation email threw', err)
  }
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again shortly.' }, { status: 429 })
  }

  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Payload too large.' }, { status: 413 })
  }

  let json: unknown
  try {
    json = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const parsed = ContactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const { name, email, message, company, locale } = parsed.data
  if (company) {
    // Honeypot tripped — pretend success, drop silently.
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const humanOk = await verifyTurnstile(parsed.data['cf-turnstile-response'], ip)
  if (!humanOk) {
    return NextResponse.json({ error: 'Verification failed.' }, { status: 403 })
  }

  try {
    await deliver(name, email, message, locale ?? 'en')
  } catch {
    return NextResponse.json({ error: 'Could not send right now.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
