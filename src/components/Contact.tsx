import { TitleSection } from './others'

import { FaGithub, FaDev, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa'

const Contact = () => {
  return (
    <div
      id="contacts"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Contact" />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center space-y-5">
          <p className="text-xl font-medium tracking-wider">Get in touch</p>
          <div className="w-full flex flex-row space-x-5 items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaGithub className="text-3xl fill-alternate hover:fill-[#4242BC] duration-300 dark:fill-snow dark:hover:fill-[#B300A4]" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaDev className="text-3xl fill-alternate hover:fill-[#4242BC] duration-300 dark:fill-snow dark:hover:fill-[#B300A4]" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-3xl fill-alternate hover:fill-[#4242BC] duration-300 dark:fill-snow dark:hover:fill-[#B300A4]" />
            </a>
          </div>

          <div className="w-full flex flex-row space-x-5 items-center justify-center">
            <a href="" target="_blank" rel="noreferrer">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaMedium className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
