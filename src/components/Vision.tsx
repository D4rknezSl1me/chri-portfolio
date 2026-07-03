import { Section } from './Section'

export function Vision() {
  return (
    <Section id="vision" eyebrow="Where I'm headed" title="The vision">
      <div className="grid gap-10 md:grid-cols-3">
        <p className="text-lg leading-relaxed text-muted md:col-span-2">
          I&apos;m a software developer today with deep, hands-on skills — and I&apos;m
          deliberately building into a world-class engineer over the next few years. But the goal
          isn&apos;t just to be great at the craft. It&apos;s to build a company of my own: to turn
          a concrete thesis about{' '}
          <span className="text-fg">the software I believe should exist</span> into a product,
          a team, and a business. This site is the first proof of how I work — owned end to end,
          from the code to the cluster it runs on.
        </p>
        <ul className="space-y-4 text-sm">
          {[
            { k: 'Now', v: 'Shipping real software, sharpening fundamentals.' },
            { k: '3 years', v: 'A world-class engineer with a track record.' },
            { k: 'The goal', v: 'Founding and building my own company.' },
          ].map((row) => (
            <li key={row.k} className="rounded-xl border border-border bg-surface/40 p-4">
              <p className="font-semibold text-accent">{row.k}</p>
              <p className="mt-1 text-muted">{row.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
