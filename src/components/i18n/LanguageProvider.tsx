'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { dictionaries, htmlLang, type Dictionary, type Locale } from '@/lib/i18n'
import { defaultLocale, locales } from '@/lib/i18n/config'

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: Dictionary }

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Restore the saved choice on mount (English is the default, so the initial
  // server render matches the common case and there's nothing to flash).
  useEffect(() => {
    try {
      const saved = localStorage.getItem('locale')
      if (saved && (locales as readonly string[]).includes(saved)) {
        setLocaleState(saved as Locale)
      }
    } catch {
      /* private mode */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale]
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('locale', l)
    } catch {
      /* private mode */
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within <LanguageProvider>')
  return ctx
}
