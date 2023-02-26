import { About, Contact, Hero, Navbar, Projects, Stack } from '@/components'

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
