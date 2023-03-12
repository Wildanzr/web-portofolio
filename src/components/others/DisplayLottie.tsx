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
        style={{ width: '300px', height: '300px' }}
    />
  )
}