'use client'

import { About, Contact, Hero, Projects, Stack } from '@/components'
import { Navbar } from '@/components/navbar'

import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function Home () {
  return (
    <main className='h-full w-full flex flex-col px-5 py-5 font-poppins bg-snow dark:bg-main text-alternate  dark:text-snow duration-500 ease-out'>
      <GoogleAnalytics gaMeasurementId="G-D39WFJ8Z2L" />
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <div className="flex h-96"></div>
      <div className="flex h-96"></div>
      <Contact />
    </main>
  )
}
