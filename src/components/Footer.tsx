import Image from 'next/image'

export default function Footer () {
  return (
    <div className="flex flex-col items-center pt-10 pb-2 justify-center">
      <p className="text xl font-light">
        © 2023. Made with
        <Image src={'/images/heart.webp'} alt="heart" width={30} height={30} className="inline-block w-5 h-5 mx-2" />
        by Wildan
      </p>
    </div>
  )
}
