'use client'

import { useState } from 'react'
import { Section } from './Section'
import { site } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError(null)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error ?? 'Something went wrong.')
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <Section id="contact" eyebrow="Let's talk" title="Get in touch">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted">
            Building something, hiring, or investing in people early? I&apos;d love to hear from
            you.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block font-medium text-accent hover:underline"
          >
            {site.email}
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Honeypot — hidden from humans, catches naive bots. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="hidden"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-lg border border-border bg-surface/40 px-4 py-3 outline-none focus:border-accent"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-lg border border-border bg-surface/40 px-4 py-3 outline-none focus:border-accent"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message"
            className="w-full rounded-lg border border-border bg-surface/40 px-4 py-3 outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
          </button>
          {status === 'error' && <p className="text-sm text-red-400">{error}</p>}
          {status === 'sent' && (
            <p className="text-sm text-accent">Thanks — I&apos;ll get back to you soon.</p>
          )}
        </form>
      </div>
    </Section>
  )
}
