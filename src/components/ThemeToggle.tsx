'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

function apply(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('light', theme === 'light')
  root.classList.toggle('dark', theme === 'dark')
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* private mode — no persistence, no problem */
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  // Apply the saved preference on mount. Dark is the default, so returning
  // dark-mode visitors (the majority) see no flash; light is opt-in.
  useEffect(() => {
    let stored: Theme = 'dark'
    try {
      const s = localStorage.getItem('theme')
      if (s === 'light' || s === 'dark') stored = s
    } catch {
      /* private mode */
    }
    setTheme(stored)
    apply(stored)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    apply(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-fg"
    >
      {theme === 'dark' ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  )
}
