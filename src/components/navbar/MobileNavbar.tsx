import { useGlobal } from '@/contexts/Global'

import Link from 'next/link'

interface IUseGlobal {
  globalStates: {
    isMenuOpen: boolean | null;
    setIsMenuOpen: (value: boolean | null) => void;
  };
}

const MobileNavbar = () => {
  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isMenuOpen } = globalStates

  // Navbar data
  const navData = ['About Me', 'Tech Stack', 'Projects', 'Contacts']

  return (
    <div className={`${isMenuOpen ? 'w-full h-full flex sticky' : 'w-full h-0 hidden'} flex-col items-center justify-centerb transition-all duration-500`}>
      <ul className="w-full flex flex-col items-center justify-center space-y-5 py-3 bg-alternate">
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
  )
}

export default MobileNavbar
