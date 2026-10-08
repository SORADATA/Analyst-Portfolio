import { Contact } from '@/components/portfolio/contact'
import { Experience } from '@/components/portfolio/experience'
import { Expertise } from '@/components/portfolio/expertise'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { SiteHeader } from '@/components/portfolio/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
