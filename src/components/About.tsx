import { TitleSection, Highlight, Bold, Experience } from './others'

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="About Me" />

      <div className="w-full flex flex-col space-y-3 items-center justify-center">
        <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
          Hii,... my name is
          <Highlight content=" Graita Sukma Febriansyah Triwildan Azmi" />
          , and yeah, it&apos;s a mouthful! 😂 <br /> As a student of
          Information Technology Education at the University of Brawijaya, I am
          passionate about exploring new technologies and constantly improving
          my skills as a
          <Bold content=" Full-Stack Developer" />. I specialize in using
          the <Bold content="MERN Stack" />, which includes
          <Bold content=" MongoDB, Express, React, Node.js" /> and
          other related technologies.
        </p>
        <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
          With my expertise in this area, I am confident that I can make a
          valuable contribution to your organization as a Full-Stack Developer.
          I am committed to developing powerful, scalable web applications that
          adhere to best practices in software development. ✌
        </p>
        <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
          Let&apos;s work together to build innovative and high-performing
          applications that drive your business forward. 😎
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center py-10 lg:px-20 space-y-8">
        <div className="w-full flex flex-col justify-start items-center">
          <p className='font-light text-2xl text-center tracking-wider'>Experiences</p>
        </div>

        <div className="w-full flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-x-5 lg:space-y-0 items-start justify-around">
          <Experience year="2020" title="Basic Programming Assistant" at="FILKOM" place="University of Brawijaya" pos={true} />
          <Experience year="2021" title="Object Oriented Assistant" at="FILKOM" place="University of Brawijaya" pos={false} />
        </div>

        <div className="w-full flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-x-5 lg:space-y-0 items-start justify-around">
          <Experience year="2021" title="DTS Scholarship Awardee" at="Online" place="University of Brawijaya" pos={true} />
          <Experience year="2021" title="Object Oriented Assistant" at="FILKOM" place="University of Brawijaya" pos={false} />
        </div>
      </div>
    </div>
  )
}

export default About
