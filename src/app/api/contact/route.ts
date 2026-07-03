import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 10_000

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
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

async function deliver(name: string, email: string, message: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    // Email not wired yet — log server-side so nothing is lost during setup.
    console.info('[contact] (email not configured) message received', { name, email })
    return
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  })
  if (!res.ok) throw new Error('Email delivery failed')
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

  const { name, email, message, company } = parsed.data
  if (company) {
    // Honeypot tripped — pretend success, drop silently.
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const humanOk = await verifyTurnstile(parsed.data['cf-turnstile-response'], ip)
  if (!humanOk) {
    return NextResponse.json({ error: 'Verification failed.' }, { status: 403 })
  }

  try {
    await deliver(name, email, message)
  } catch {
    return NextResponse.json({ error: 'Could not send right now.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
