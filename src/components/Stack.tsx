import { TitleSection } from './others'

const Stack = () => {
  return (
    <div
      id="tech-stack"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Tech Stack" />

      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-full flex items-center justify-center">
          <h3 className="font-3xl font-medium tracking-wider">
            Tempat gambar
          </h3>
        </div>
        <div className="w-full flex items-center justify-center">
          <h3 className="font-3xl font-medium tracking-wider">
            Full Stack Development
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Stack
