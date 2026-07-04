'use client'

import { Section } from './Section'
import { Parallax } from './Parallax'
import { SpotlightCard } from './SpotlightCard'
import { projects } from '@/lib/projects'
import { useI18n } from './i18n/LanguageProvider'

export function Work() {
  const { t } = useI18n()

  return (
    <Section id="work" eyebrow={t.work.eyebrow} title={t.work.title}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          // Translated copy per slug, falling back to the English source data.
          const tp = t.projects[p.slug] ?? {
            title: p.title,
            summary: p.summary,
            role: p.role,
            outcome: p.outcome,
          }
          return (
            // Alternate columns drift at opposing rates so the grid feels alive
            // and gains depth as it scrolls past.
            <Parallax
              key={p.slug}
              from={i % 2 === 0 ? 44 : 76}
              to={i % 2 === 0 ? -44 : -76}
              className="h-full"
            >
              <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/50">
                <div className="mb-3 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold">{tp.title}</h3>
                  <span className="text-sm text-muted">{p.year}</span>
                </div>

                {p.live && (
                  <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    {t.work.inProduction}
                  </span>
                )}

                <p className="text-muted">{tp.summary}</p>

                <dl className="mt-4 space-y-1 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-muted">{t.work.roleLabel}</dt>
                    <dd>{tp.role}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted">{t.work.outcomeLabel}</dt>
                    <dd>{tp.outcome}</dd>
                  </div>
                </dl>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-4 text-sm">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      {t.work.live}
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      {t.work.code}
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </Parallax>
          )
        })}
      </div>
    </Section>
  )
}
