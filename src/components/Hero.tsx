'use client'
import { useState, useEffect } from 'react'
import { useGlobal } from '@/contexts/Global'

import Image from 'next/image'

interface IUseGlobal {
  globalStates: {
    isDark: boolean | null
  }
}

const Hero = () => {
  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isDark } = globalStates

  const size = 35

  const [windowWidth, setWindowWidth] = useState(300)

  useEffect(() => {
    let handleResize = () => {}
    if (windowWidth <= 400) {
      handleResize = () => setWindowWidth(window.innerWidth - 114)
      handleResize() // set initial width
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

  return (
    <div id="me" className="w-full flex flex-col-reverse gap-5 lg:flex-row items-center justify-center pt-20 px-5 lg:px-32">
      {/* Name section */}
      <div className="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <div className="w-full flex flex-row items-center justify-center lg:items-start lg:justify-start space-x-3">
          <p className="flex text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide whitespace-nowrap">Hello there</p>
          <Image src="/wave.png" width={size} height={size} alt="Hello" />
        </div>

        <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p className='flex text-3xl sm:text-4xl md:text-5xl font-light tracking-wide whitespace-nowrap'>
            My Name is
            <span className='font-medium text-pink-400 dark:text-blue-400 pl-2 duration-500 ease-out'>Wildan</span>
          </p>
        </div>

        <div className="w-full flex flex-col pt-1">
          <p className='w-full text-sm md:text-base text-center lg:text-left font-extralight italic'>A person who always motivated to learn a new thing</p>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full flex flex-col items-center justify-center">
        <Image src='/me.png' className={`${isDark ? 'flex' : 'hidden'}`} width={windowWidth} height={windowWidth} alt='Wildan' />
        <Image src='/me2.png' className={`${isDark ? 'hidden' : 'flex'}`} width={windowWidth} height={windowWidth} alt='Wildan' />
      </div>
    </div>
  )
}

export default Hero
