'use client'
import { useGlobal } from '@/contexts/Global'
import MobileNavbar from './MobileNavbar'

import { RiMenuLine } from 'react-icons/ri'
import Link from 'next/link'

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
  const navData = ['About Me', 'Tech Stack', 'Projects', 'Contacts']

  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isMenuOpen, setIsMenuOpen } = globalStates

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="w-full flex flex-row justify-between">
        {/* Name Logo */}
        <div className="flex">
          <Link
            href={'/'}
            className="text-xl lg:text-3xl font-semibold xl:font-bold tracking-wider xl:tracking-widest"
          >
            Wildan
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <RiMenuLine className="text-3xl" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row">
          <ul className="w-full flex flex-row items-end space-x-5">
            {navData.map((item, index) => (
              <li key={index} className="flex flex-col cursor-pointer group">
                <Link
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-normal tracking-wide duration-500"
                >
                  {item}
                </Link>
                <span className="-bottom-1 left-0 w-0 h-0.5 rounded-full bg-blue-400 transition-all group-hover:w-full duration-500"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="w-full flex md:hidden">
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Navbar
