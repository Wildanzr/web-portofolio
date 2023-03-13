import { TitleSection, DisplayLottie } from './others'

import emoji from 'react-easy-emoji'

import Development from '../assets/lotties/development.json'
import Cloud from '../assets/lotties/cloud.json'
import Blockchain from '../assets/lotties/blockchain.json'

const Stack = () => {
  const techStack = [
    {
      name: 'Full Stack Developer',
      icon: Development,
      align: 'lg:flex-row',
      emoji: '🚀',
      services: [
        'Building secure and scalable application server',
        'Building responsive and optimized web for small businesses',
        'Building custom web application based on requirements'
      ]
    },
    {
      name: 'Cloud Computing',
      icon: Cloud,
      align: 'lg:flex-row-reverse',
      emoji: '☁️',
      services: [
        'Build and deploying web applications on cloud',
        'Providing scalable and secure cloud hosting solutions for websites',
        'Providing cloud-based CI/CD pipelines for web applications'
      ]
    },
    {
      name: 'Blockchain',
      icon: Blockchain,
      align: 'lg:flex-row',
      emoji: '🔗',
      services: [
        'Building decentralized applications (dApps)',
        'Developing smart contracts on blockchain platforms',
        'Integrating Web3 protocols such as IPFS, Arweave, or Filecoin'
      ]
    }
  ]
  return (
    <div
      id="tech-stack"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Tech Stack" />

      {techStack.map((tech, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${tech.align} items-center justify-between`}
        >
          <div className="w-full flex items-center justify-center">
            <DisplayLottie animationData={tech.icon} />
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-5">
            <h3 className="text-2xl font-normal tracking-wider">{tech.name}</h3>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              {tech.services.map((service, index) => (
                <div
                  key={index}
                  className="mb-0 flex flex-row items-start lg:items-center justify-center space-x-2 font-light text-base"
                >
                  {emoji(tech.emoji)}
                  <p className='text-left lg:text-center'>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stack
