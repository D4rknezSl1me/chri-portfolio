'use client'

import { Section } from './Section'
import { useI18n } from './i18n/LanguageProvider'

const numbers = ['01', '02', '03', '04']

export function Process() {
  const { t } = useI18n()

  return (
    <Section id="process" eyebrow={t.process.eyebrow} title={t.process.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((s, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/50"
          >
            <span className="text-sm font-semibold tracking-[0.2em] text-accent">
              {numbers[i]}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
