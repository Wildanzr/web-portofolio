import { TitleSection, DisplayLottie } from './others'

import Development from '../assets/lotties/development.json'
import Cloud from '../assets/lotties/cloud.json'
import Blockchain from '../assets/lotties/blockchain.json'

const Stack = () => {
  return (
    <div
      id="tech-stack"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Tech Stack" />

      <div className="w-full flex flex-row py-5 items-start justify-between">
        <div className="w-full flex items-center justify-center">
          <DisplayLottie animationData={Development} />
        </div>
        <div className="w-full flex items-center justify-center">
          <h3 className="text-2xl font-normal tracking-wider">
            Full Stack Development
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Stack
