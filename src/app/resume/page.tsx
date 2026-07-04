import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'
import { skills } from '@/lib/skills'
import { projects } from '@/lib/projects'
import { PrintButton } from '@/components/PrintButton'

export const metadata: Metadata = {
  title: 'Résumé',
  description: `One-page résumé for ${site.name}, ${site.role}.`,
}

// A print-optimized one-pager generated from the same source of truth as the
// site. On screen it stays on-brand; when printed it flips to clean black-on-white.
export default function ResumePage() {
  const selected = projects.filter((p) => p.slug !== 'this-site').slice(0, 5)

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 print:py-0 print:text-black">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link href="/" className="text-sm text-muted transition-colors hover:text-fg">
          ← Back to site
        </Link>
        <PrintButton />
      </div>

      <article className="rounded-2xl border border-border bg-surface/40 p-8 print:rounded-none print:border-0 print:bg-transparent print:p-0">
        <header className="border-b border-border pb-5 print:border-black/20">
          <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-accent print:text-black">{site.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted print:text-black/70">
            <a href={`mailto:${site.email}`} className="hover:text-fg">
              {site.email}
            </a>
            <span>{site.location}</span>
            <a href={site.socials.github} className="hover:text-fg">
              github.com/D4rknezSl1me
            </a>
            <a href={site.socials.linkedin} className="hover:text-fg">
              LinkedIn
            </a>
            <a href={site.url} className="hover:text-fg">
              christiancangelli.com
            </a>
          </div>
        </header>

        <Block title="Summary">
          <p className="text-sm leading-relaxed text-muted print:text-black/80">
            Full-stack software developer building production systems end to end, from UI to data
            model to the Kubernetes cluster they run on. Currently full-stack on KinAI, an AI
            platform in production with clubs across Italy&apos;s Serie A and Serie B. Deliberately
            building toward world-class engineering and, ultimately, a company of my own.
          </p>
        </Block>

        <Block title="Selected work">
          <ul className="space-y-3">
            {selected.map((p) => (
              <li key={p.slug} className="text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold">
                    {p.title}
                    {p.live && <span className="text-accent print:text-black"> · in production</span>}
                  </span>
                  <span className="text-muted print:text-black/60">{p.year}</span>
                </div>
                <p className="mt-0.5 text-muted print:text-black/80">{p.outcome}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Skills">
          <dl className="space-y-1.5 text-sm">
            {skills.map((g) => (
              <div key={g.category} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                <dt className="min-w-[10rem] font-medium text-accent print:text-black">
                  {g.category}
                </dt>
                <dd className="text-muted print:text-black/80">{g.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="Trajectory">
          <ul className="space-y-1 text-sm text-muted print:text-black/80">
            <li>
              <span className="font-medium text-fg print:text-black">Now:</span> Shipping real
              software, sharpening fundamentals.
            </li>
            <li>
              <span className="font-medium text-fg print:text-black">3 years:</span> A world-class
              engineer with a track record.
            </li>
            <li>
              <span className="font-medium text-fg print:text-black">The goal:</span> Founding and
              building my own company.
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
