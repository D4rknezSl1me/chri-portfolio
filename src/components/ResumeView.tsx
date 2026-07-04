'use client'

import Link from 'next/link'
import { site } from '@/lib/site'
import { skills } from '@/lib/skills'
import { projects } from '@/lib/projects'
import { PrintButton } from './PrintButton'
import { useI18n } from './i18n/LanguageProvider'

// Translated, print-optimized one-pager. On screen it stays on-brand; printed,
// it flips to clean black-on-white (see the print: utilities).
export function ResumeView() {
  const { t } = useI18n()
  const selected = projects.filter((p) => p.slug !== 'this-site').slice(0, 5)

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 print:py-0 print:text-black">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-fg">
          {t.resume.back}
        </Link>
        <PrintButton label={t.resume.print} />
      </div>

      <article className="rounded-2xl border border-border bg-surface/40 p-8 print:rounded-none print:border-0 print:bg-transparent print:p-0">
        <header className="border-b border-border pb-5 print:border-black/20">
          <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-accent print:text-black">{t.hero.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted print:text-black/70">
            <a href={`mailto:${site.email}`} className="hover:text-fg">
              {site.email}
            </a>
            <span>{t.contact.location}</span>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              github.com/D4rknezSl1me
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn
            </a>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              christiancangelli.com
            </a>
          </div>
        </header>

        <Block title={t.resume.summaryTitle}>
          <p className="text-sm leading-relaxed text-muted print:text-black/80">
            {t.resume.summaryBody}
          </p>
        </Block>

        <Block title={t.resume.workTitle}>
          <ul className="space-y-3">
            {selected.map((p) => {
              const tp = t.projects[p.slug] ?? { title: p.title, outcome: p.outcome }
              return (
                <li key={p.slug} className="text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold">
                      {tp.title}
                      {p.live && (
                        <span className="text-accent print:text-black"> · {t.resume.inProduction}</span>
                      )}
                    </span>
                    <span className="text-muted print:text-black/60">{p.year}</span>
                  </div>
                  <p className="mt-0.5 text-muted print:text-black/80">{tp.outcome}</p>
                </li>
              )
            })}
          </ul>
        </Block>

        <Block title={t.resume.skillsTitle}>
          <dl className="space-y-1.5 text-sm">
            {skills.map((g) => (
              <div key={g.category} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                <dt className="min-w-[10rem] font-medium text-accent print:text-black">
                  {t.skills.categories[g.category] ?? g.category}
                </dt>
                <dd className="text-muted print:text-black/80">{g.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title={t.resume.trajectoryTitle}>
          <ul className="space-y-1 text-sm text-muted print:text-black/80">
            <li>
              <span className="font-medium text-fg print:text-black">{t.resume.now}</span>{' '}
              {t.resume.nowBody}
            </li>
            <li>
              <span className="font-medium text-fg print:text-black">{t.resume.threeYears}</span>{' '}
              {t.resume.threeYearsBody}
            </li>
            <li>
              <span className="font-medium text-fg print:text-black">{t.resume.goal}</span>{' '}
              {t.resume.goalBody}
            </li>
          </ul>
        </Block>
      </article>
    </main>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted print:text-black/60">
        {title}
      </h2>
      {children}
    </section>
  )
}
