import { TitleSection, Highlight } from './others'

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
          <Highlight content=" Full-Stack Developer" />. I specialize in using
          the <Highlight content="MERN Stack" />, which includes
          <Highlight content=" MongoDB, Express, React, Node.js" /> and
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
    </div>
  )
}

export default About
