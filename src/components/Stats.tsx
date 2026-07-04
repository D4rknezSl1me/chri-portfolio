'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { useI18n } from './i18n/LanguageProvider'

type Stat = { value: number; suffix?: string; text?: string }

const stats: Stat[] = [
  { value: 6, suffix: '' },
  { value: 3, suffix: '' },
  { value: 100, suffix: '%' },
  { text: 'A+', value: 0 },
]

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) {
      setN(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1100
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export function Stats() {
  const { t } = useI18n()
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-content px-6 py-12">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <dt className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                {s.text ? s.text : <CountUp to={s.value} suffix={s.suffix} />}
              </dt>
              <dd className="mt-2 text-sm text-muted">{t.stats.items[i]}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted md:justify-start">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden>
            <path d="M12 2 4 5v6c0 5 3.4 8.3 8 11 4.6-2.7 8-6 8-11V5l-8-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>
            {t.stats.trustBefore}
            <span className="text-fg">{t.stats.trustEmphasis}</span>
            {t.stats.trustAfter}
          </span>
        </div>
      </div>
    </section>
  )
}
