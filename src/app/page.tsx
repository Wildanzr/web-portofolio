import Image from 'next/image'
import { Inter } from 'next/font/google'
import { About, Contact, Hero, Navbar, Projects, Stack } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-full w-full bg-red-400'>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}
