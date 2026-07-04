'use client'

import { site } from '@/lib/site'
import { useI18n } from './i18n/LanguageProvider'

const stack = [
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Framer Motion',
  'k3s',
  'Cloudflare Tunnel',
  'nonce-based CSP',
  'cert-manager TLS',
  'distroless · non-root',
  'GitHub Actions (v* tags)',
]

// A quiet technical footnote — proof the Skills list isn't decorative. This very
// page is designed, built, secured, and self-hosted end to end.
export function Colophon() {
  const { t } = useI18n()
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-content px-6 py-12">
        <p className="text-sm text-muted">
          <span className="text-fg">{t.colophon.lead}</span>
          {t.colophon.body}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
        <a
          href={site.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
        >
          {t.colophon.readSource}
        </a>
      </div>
    </section>
  )
}
