'use client'

import { useEffect, useRef, useState } from 'react'
import { localeMeta, locales, type Locale } from '@/lib/i18n'
import { useI18n } from './LanguageProvider'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = localeMeta[locale]

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.language.change}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
      >
        <span className="font-mono text-xs font-semibold tracking-wide text-accent">
          {current.code}
        </span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={open ? 'rotate-180 transition-transform' : 'transition-transform'}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-surface shadow-xl"
        >
          {locales.map((l: Locale) => {
            const meta = localeMeta[l]
            const active = l === locale
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(l)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors hover:bg-bg/60 ${
                    active ? 'text-accent' : 'text-fg'
                  }`}
                >
                  <span
                    className={`w-6 font-mono text-xs font-semibold tracking-wide ${
                      active ? 'text-accent' : 'text-muted'
                    }`}
                  >
                    {meta.code}
                  </span>
                  <span className="flex-1">{meta.label}</span>
                  <span className="text-xs text-muted">{meta.english}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
