import { Nav } from '@/components/Nav'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { Skills } from '@/components/Skills'
import { Vision } from '@/components/Vision'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
