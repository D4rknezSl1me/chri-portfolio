import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
  colorScheme: 'dark',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: 'Software Developer',
  sameAs: [site.socials.github, site.socials.linkedin],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD is static and safe; not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
