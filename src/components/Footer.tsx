'use client'

import { site } from '@/lib/site'
import { useI18n } from './i18n/LanguageProvider'

export function Footer() {
  const { t } = useI18n()
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
          <a href={`mailto:${site.email}`} className="hover:text-fg">
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
