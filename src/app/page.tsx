import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { Vision } from '@/components/Vision'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
