import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDev,
  FaMedium
} from 'react-icons/fa'

export default function SocialMedia () {
  return (
    <div className="w-full lg:w-8/12 flex flex-col items-center lg:items-start justify-center space-y-10">
      <div className="w-full flex flex-col">
        <p className="text-4xl text-center lg:text-left font-bold tracking-wider text-pink-400 dark:text-blue-400 duration-500 ease-in-out">
          Get in touch
        </p>

        <p className="text-base text-center lg:text-left font-light tracking-wider">
          Or fill in the form to start conversation
        </p>
      </div>

      <div className="w-full flex flex-col items-center lg:items-start justify-start space-y-7">
        <div className="w-full flex flex-row items-center justify-center lg:justify-start space-x-10">
          <a href="https://github.com/Wildanzr" target="_blank" rel="noreferrer">
            <FaGithub className="text-4xl fill-alternate hover:fill-pink-400 duration-300 dark:fill-snow dark:hover:fill-blue-400" />
          </a>
          <a href="https://www.instagram.com/dannzrrr/" target="_blank" rel="noreferrer">
            <FaInstagram className="text-4xl fill-alternate hover:fill-pink-400 duration-300 dark:fill-snow dark:hover:fill-blue-400" />
          </a>
          <a href="https://twitter.com/Wildanzr24" target="_blank" rel="noreferrer">
            <FaTwitter className="text-4xl fill-alternate hover:fill-pink-400 duration-300 dark:fill-snow dark:hover:fill-blue-400" />
          </a>
        </div>

        <div className="w-full flex flex-row items-center justify-center lg:justify-start space-x-10">
          <a href="https://www.linkedin.com/in/wildanzr/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-4xl fill-alternate hover:fill-pink-400 duration-300 dark:fill-snow dark:hover:fill-blue-400" />
          </a>
          <a href="https://dev.to/wildanzr" target="_blank" rel="noreferrer">
            <FaDev className="text-4xl fill-alternate hover:fill-pink-400 duration-300 dark:fill-snow dark:hover:fill-blue-400" />
          </a>
          <a href="https://medium.com/@wildanzr" target="_blank" rel="noreferrer">
            <FaMedium className="text-4xl fill-alternate hover:fill-pink-400 duration-300 dark:fill-snow dark:hover:fill-blue-400" />
          </a>
        </div>
      </div>
    </div>
  )
}
