import { getGitHubActivity } from '@/lib/github'
import { site } from '@/lib/site'
import { Section } from './Section'

// Server component: pulls live public repos so visitors see I actually ship.
export async function GitHubActivity() {
  const data = await getGitHubActivity()

  return (
    <Section id="open-source" eyebrow="In the open" title="Recently shipped on GitHub">
      {data && data.repos.length > 0 ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.repos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                className="group flex flex-col rounded-2xl border border-border bg-surface/40 p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold text-fg group-hover:text-accent">
                    {r.name}
                  </span>
                  {r.stars > 0 && <span className="text-xs text-muted">★ {r.stars}</span>}
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
            {data.publicRepos} public repositories ·{' '}
            <a href={site.socials.github} className="font-medium text-accent hover:underline">
              See all on GitHub →
            </a>
          </p>
        </>
      ) : (
        <a href={site.socials.github} className="font-medium text-accent hover:underline">
          Find me on GitHub →
        </a>
      )}
    </Section>
  )
}
