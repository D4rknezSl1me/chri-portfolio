'use client'

import { useEffect, useState } from 'react'
import { useI18n } from './i18n/LanguageProvider'

// A "star this site" button for the header. The total is a real, shared count
// backed by Upstash (see /api/stars): GET reads it on mount, POST records a
// star. localStorage still gates repeat stars per browser — a visitor stars
// once, and refreshing the page never adds more — so the endpoint is only hit
// once per person. If Upstash is unconfigured the API falls back to a baseline,
// so the button always renders a sensible number.
const STORAGE_KEY = 'starred'
const FALLBACK_STARS = 128

export function StarButton() {
  const { t } = useI18n()
  const [starred, setStarred] = useState(false)
  const [burst, setBurst] = useState(false)
  const [count, setCount] = useState(FALLBACK_STARS)

  // Restore the saved choice and fetch the live total on mount. The server (and
  // first client render) assume un-starred with the fallback count — the common
  // case — so there's nothing to flash before the real number arrives.
  useEffect(() => {
    try {
      setStarred(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {
      /* private mode — the star just won't persist */
    }
    fetch('/api/stars')
      .then((res) => res.json())
      .then((data: { count?: number }) => {
        if (typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => {
        /* offline / API down — keep the fallback count */
      })
  }, [])

  const give = () => {
    if (starred) return // one-way: once given, it stays. This is the refresh-spam guard.
    setStarred(true)
    setBurst(true)
    setCount((c) => c + 1) // optimistic; reconciled with the server total below.
    window.setTimeout(() => setBurst(false), 550)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* private mode */
    }
    fetch('/api/stars', { method: 'POST' })
      .then((res) => res.json())
      .then((data: { count?: number }) => {
        if (typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => {
        /* the optimistic +1 stands; the count self-corrects on next load */
      })
  }

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
