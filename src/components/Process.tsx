import { Section } from './Section'

const steps = [
  {
    k: '01',
    title: 'Design',
    body: 'Sharp product thinking before a line of code: what should exist, and why it wins.',
  },
  {
    k: '02',
    title: 'Build',
    body: 'Full-stack, strongly typed, and tested, from the UI down to the data model.',
  },
  {
    k: '03',
    title: 'Ship',
    body: 'CI/CD on v* tags: image scan, security gates, zero-downtime rollout, automatically.',
  },
  {
    k: '04',
    title: 'Own',
    body: 'It runs on my own k3s cluster. I own the code and the metal it lives on.',
  },
]

export function Process() {
  return (
    <Section id="process" eyebrow="How I work" title="Idea to production, owned end to end">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.k}
            className="relative rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/50"
          >
            <span className="text-sm font-semibold tracking-[0.2em] text-accent">{s.k}</span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
