'use client'

import { useState } from 'react'
import { site } from '@/lib/site'
import { useI18n } from './i18n/LanguageProvider'

export function Footer() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      // Clipboard API unavailable (old browser / insecure origin) — fall back to mailto.
      window.location.href = `mailto:${site.email}`
      return
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {t.brand}. {t.footer.tagline}
        </p>
        <div className="flex gap-6">
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            {t.footer.github}
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            {t.footer.linkedin}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            title={site.email}
            aria-label={copied ? t.footer.copied : `${t.footer.email}: ${site.email}`}
            className="transition-colors hover:text-fg"
          >
            {copied ? t.footer.copied : t.footer.email}
          </button>
        </div>
      </div>
    </footer>
  )
}
