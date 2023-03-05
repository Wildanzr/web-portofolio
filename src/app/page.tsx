import { About, Contact, Hero, Projects, Stack } from '@/components'
import { Navbar } from '@/components/navbar'

export default function Home () {
  return (
    <main className='h-full w-full flex flex-col px-5 py-5 font-poppins bg-snow dark:bg-main text-alternate  dark:text-snow duration-500 ease-out'>
      <Navbar />
      <Hero />
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
