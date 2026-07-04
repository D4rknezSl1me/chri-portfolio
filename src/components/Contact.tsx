'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from './Section'
import { site } from '@/lib/site'
import { Magnetic } from './Magnetic'
import { useI18n } from './i18n/LanguageProvider'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const { t } = useI18n()
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
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted">{t.contact.blurb}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block font-medium text-accent hover:underline"
          >
            {site.email}
          </a>
          <div className="mt-3 flex items-center gap-2 text-muted">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{t.contact.location}</span>
          </div>
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
              placeholder={t.contact.name}
              className="rounded-lg border border-border bg-surface/40 px-4 py-3 outline-none focus:border-accent"
            />
            <input
              name="email"
              type="email"
              required
              placeholder={t.contact.email}
              className="rounded-lg border border-border bg-surface/40 px-4 py-3 outline-none focus:border-accent"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.contact.message}
            className="w-full rounded-lg border border-border bg-surface/40 px-4 py-3 outline-none focus:border-accent"
          />
          <AnimatePresence mode="wait" initial={false}>
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4"
              >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(var(--accent))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="m8 12 3 3 5-6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
                  />
                </motion.svg>
                <p className="text-sm text-fg">{t.contact.sent}</p>
              </motion.div>
            ) : (
              <motion.div key="form" exit={{ opacity: 0 }} className="space-y-3">
                <Magnetic className="inline-block">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg disabled:opacity-60"
                  >
                    {status === 'sending' ? t.contact.sending : t.contact.send}
                  </button>
                </Magnetic>
                {status === 'error' && <p className="text-sm text-red-400">{error}</p>}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </Section>
  )
}
