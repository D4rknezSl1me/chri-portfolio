export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}
