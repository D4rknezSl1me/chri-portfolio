'use client'

import type { GitHubActivity as Data } from '@/lib/github'
import { site } from '@/lib/site'
import { Section } from './Section'
import { useI18n } from './i18n/LanguageProvider'

// Client renderer for the server-fetched GitHub data, so its chrome can be
// translated. Falls back to a plain link if the fetch returned nothing.
export function GitHubActivityView({ data }: { data: Data }) {
  const { t } = useI18n()

  return (
    <Section id="open-source" eyebrow={t.github.eyebrow} title={t.github.title}>
      {data && data.repos.length > 0 ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.repos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold text-fg group-hover:text-accent">
                    {r.name}
                  </span>
                  {r.stars > 0 && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
                      </svg>
                      {r.stars}
                    </span>
                  )}
                </div>
                {r.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{r.description}</p>
                )}
                {r.language && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {r.language}
                  </span>
                )}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            {data.publicRepos} {t.github.reposSuffix} ·{' '}
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              {t.github.seeAll}
            </a>
          </p>
        </>
      ) : (
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:underline"
        >
          {t.github.fallback}
        </a>
      )}
    </Section>
  )
}
