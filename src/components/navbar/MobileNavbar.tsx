import { useGlobal } from '@/contexts/Global'

interface IUseGlobal {
  globalStates: {
    isMenuOpen: boolean | null;
    setIsMenuOpen: (value: boolean | null) => void;
  };
}

const MobileNavbar = () => {
  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isMenuOpen, setIsMenuOpen } = globalStates

  // Navbar data
  const navData = ['About', 'Tech Stack', 'Projects', 'Contacts']

  // Close menu when clicked
  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 500)
  }

  return (
    <div className={`${isMenuOpen ? 'w-full h-full flex sticky' : 'w-full h-0 hidden'} flex-col items-center justify-centerb transition-all duration-300`}>
      <ul className="w-full flex flex-col items-center justify-center rounded-lg space-y-5 py-3 bg-main dark:bg-snow text-snow dark:text-main duration-300 ease-out">
        {navData.map((item, index) => (
          <li key={index} className="flex flex-col cursor-pointer group" onClick={closeMenu}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-normal tracking-wide duration-500"
            >
              {item}
            </a>
            <span className="-bottom-1 left-0 w-0 h-0.5 rounded-full bg-blue-400 dark:bg-pink-400 transition-all group-hover:w-full duration-500"></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNavbar
