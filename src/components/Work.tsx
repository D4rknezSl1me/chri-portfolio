import { Section } from './Section'
import { projects } from '@/lib/projects'

export function Work() {
  return (
    <Section id="work" eyebrow="Selected work" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="text-sm text-muted">{p.year}</span>
            </div>
            <p className="text-muted">{p.summary}</p>

            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="text-muted">Role:</dt>
                <dd>{p.role}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted">Outcome:</dt>
                <dd>{p.outcome}</dd>
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
                <a href={p.href} className="font-medium text-accent hover:underline">
                  Live →
                </a>
              )}
              {p.repo && (
                <a href={p.repo} className="font-medium text-accent hover:underline">
                  Code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
