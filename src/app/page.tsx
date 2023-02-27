import { About, Contact, Hero, Projects, Stack } from '@/components'
import { Navbar } from '@/components/navbar'

export default function Home () {
  return (
    <main className='h-full w-full px-5 py-5'>
      <Navbar />
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <Hero />
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <About />
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <Stack />
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <Projects />
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <Contact />
    </main>
  )
}
