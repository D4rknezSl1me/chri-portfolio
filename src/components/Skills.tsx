import { Section } from './Section'
import { Parallax } from './Parallax'
import { SpotlightCard } from './SpotlightCard'
import { skills } from '@/lib/skills'

// Stagger the drift by column position so the three-up grid ripples on scroll.
const DRIFT = [34, 62, 46] as const

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & expertise" title="Across the whole stack">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Parallax
            key={group.category}
            from={DRIFT[i % DRIFT.length] ?? 46}
            to={-(DRIFT[i % DRIFT.length] ?? 46)}
            className="h-full"
          >
            <SpotlightCard className="h-full rounded-2xl border border-border bg-surface/40 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-sm text-fg/90 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Parallax>
        ))}
      </div>
    </Section>
  )
}
