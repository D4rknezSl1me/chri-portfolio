'use client'

import { useEffect, useState } from 'react'
import { useI18n } from './i18n/LanguageProvider'

// A "star this site" button for the header. Deliberately localStorage-backed:
// a visitor can star exactly once per browser, and that choice is remembered,
// so refreshing the page 100 times still only ever adds a single star — no
// backend, no cost. There's no shared store, so the total is seeded from a
// baseline rather than aggregated across visitors. To make the count truly
// global later, replace BASE_STARS + local flag with a fetch to a counter API.
const STORAGE_KEY = 'starred'
const BASE_STARS = 128

export function StarButton() {
  const { t } = useI18n()
  const [starred, setStarred] = useState(false)
  const [burst, setBurst] = useState(false)

  // Restore the saved choice on mount. The server (and first client render)
  // assume un-starred — the common case — so there's nothing to flash.
  useEffect(() => {
    try {
      setStarred(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {
      /* private mode — the star just won't persist */
    }
  }, [])

  const give = () => {
    if (starred) return // one-way: once given, it stays. This is the refresh-spam guard.
    setStarred(true)
    setBurst(true)
    window.setTimeout(() => setBurst(false), 550)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* private mode */
    }
  }

  const count = BASE_STARS + (starred ? 1 : 0)
  const label = starred ? t.star.starred : t.star.give

  return (
    <button
      type="button"
      onClick={give}
      disabled={starred}
      aria-pressed={starred}
      aria-label={label}
      title={label}
      className={`group flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm transition-colors ${
        starred
          ? 'cursor-default border-accent/50 text-fg'
          : 'border-border text-muted hover:border-accent/50 hover:text-fg'
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={starred ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={`transition-transform duration-300 ${starred ? 'text-accent' : ''} ${
          burst ? 'scale-125' : 'group-hover:scale-110'
        }`}
      >
        <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 21l-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z" />
      </svg>
      <span className="tabular-nums">{count}</span>
    </button>
  )
}
