import { About, Contact, Hero, Projects, Stack } from '@/components'
import { Navbar } from '@/components/navbar'

export default function Home () {
  return (
    <main className='h-full w-full px-5 py-5'>
      <Navbar />
      <div className="flex h-96"></div>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}
