import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { ResumeView } from '@/components/ResumeView'

export const metadata: Metadata = {
  title: 'Résumé',
  description: `One-page résumé for ${site.name}, ${site.titleTagline}.`,
}

export default function ResumePage() {
  return <ResumeView />
}
