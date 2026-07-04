import { Backdrop } from '@/components/Backdrop'
import { Nav } from '@/components/Nav'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Work } from '@/components/Work'
import { Skills } from '@/components/Skills'
import { Process } from '@/components/Process'
import { Vision } from '@/components/Vision'
import { GitHubActivity } from '@/components/GitHubActivity'
import { Contact } from '@/components/Contact'
import { Colophon } from '@/components/Colophon'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Backdrop />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Skills />
        <Process />
        <Vision />
        <GitHubActivity />
        <Contact />
      </main>
      <Colophon />
      <Footer />
    </>
  )
}
