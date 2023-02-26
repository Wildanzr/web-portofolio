import { RiMenuLine } from 'react-icons/ri'
import Link from 'next/link'

const Navbar = () => {
  // Navbar data
  const navData = ['About Me', 'Tech Stack', 'Projects', 'Contacts']
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex">
        <Link href={'/'} className="text-xl lg:text-3xl font-semibold tracking-wider">
          Wildanzr
        </Link>
      </div>

      <div className="flex md:hidden">
        <RiMenuLine className="text-3xl" />
      </div>

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
  )
}

export default Navbar
