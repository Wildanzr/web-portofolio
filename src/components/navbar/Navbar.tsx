'use client'
import { useGlobal } from '@/contexts/Global'
import MobileNavbar from './MobileNavbar'
import DarkSwitcher from './DarkSwitcher'

import { motion } from 'framer-motion'
import { RiMenuLine, RiMenuFoldLine } from 'react-icons/ri'

interface IUseGlobal {
  globalStates: {
    isDark: boolean | null;
    setIsDark: (value: boolean | null) => void;
    isMenuOpen: boolean | null;
    setIsMenuOpen: (value: boolean | null) => void;
  };
}

const Navbar = () => {
  // Navbar data
  const navData = ['About', 'Tech Stack', 'Projects', 'Contacts']

  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isMenuOpen, setIsMenuOpen, isDark } = globalStates

  if (typeof window !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      document.getElementById('theme')?.classList.remove('bglight')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      document.getElementById('theme')?.classList.remove('bgdark')
    }
  }

  return (
    <div className="w-full bg-snow dark:bg-main rounded-lg flex flex-col sticky top-0 space-y-2 py-3 z-50 duration-500 ease-out">
      <div className="w-full flex flex-row justify-between">
        {/* Name Logo */}
        <div className="flex">
          <a
            href={'#me'}
            className="text-4xl font-semibold xl:font-bold tracking-wider xl:tracking-widest"
          >
            Wildan
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="w-full flex absolute z-50 justify-end items-end md:hidden">
          <div className="flex flex-row space-x-5 items-center justify-center">
            <DarkSwitcher />
            <motion.div
              className="flex items-center justify-center rounded-full"
              layout
              transition={
                {
                  type: 'tween',
                  ease: 'easeInOut',
                  duration: 0.5
                }
              }
            >
              <motion.div whileTap={{ rotate: 60 }}>
                {isMenuOpen
                  ? (
                  <RiMenuFoldLine
                    className="text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                    )
                  : (
                  <RiMenuLine
                    className="text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                    )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row">
          <ul className="w-full flex flex-row items-center justify-center space-x-5">
            <li className="flex flex-col cursor-pointer">
              <DarkSwitcher />
            </li>
            {navData.map((item, index) => (
              <li key={index} className="flex flex-col cursor-pointer group">
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-normal tracking-wide duration-500"
                >
                  {item}
                </a>
                <span className="-bottom-1 left-0 w-0 h-0.5 rounded-full bg-pink-400 dark:bg-blue-400 transition-all group-hover:w-full duration-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="w-full absolute top-10 flex md:hidden">
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Navbar
