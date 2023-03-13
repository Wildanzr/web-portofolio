import Lottie from 'lottie-react'

interface DisplayLottieProps {
    animationData: any
}
export default function DisplayLottie (porps: DisplayLottieProps) {
  const { animationData } = porps
  return (
    <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: '350px', height: '350px' }}
    />
  )
}
