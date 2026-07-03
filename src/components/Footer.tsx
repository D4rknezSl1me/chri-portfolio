import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Self-hosted on k3s, shipped via CI/CD.
        </p>
        <div className="flex gap-6">
          <a href={site.socials.github} className="hover:text-fg">
            GitHub
          </a>
          <a href={site.socials.linkedin} className="hover:text-fg">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-fg">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
