import { TitleSection, Highlight, Bold, Experience } from './others'

const About = () => {
  const experiences = [
    {
      id: 1,
      ex: [
        {
          year: '2022',
          title: 'Freelance Fullstack Developer',
          company: 'Anywhere',
          at: 'Anytime',
          desc: 'Experienced MERN stack developer with expertise in developing scalable web applications. Proficient in utilizing React.js, Node.js, and MongoDB to build robust and efficient full-stack solutions. Committed to delivering high-quality code and providing excellent user experiences.'
        },
        {
          year: '2022',
          title: 'DTS Oracle Database Programming',
          company: 'KOMINFO',
          at: 'Malang, Indonesia',
          desc: 'For the second opportunity to receive a scholarship from the Ministry of Communication and Information of the Republic of Indonesia to study Oracle Database Programming and obtain Oracle certification. Gain a deeper understanding of database engineering and administration by tackling real-world problems commonly faced by large enterprises.'
        }
      ]
    },
    {
      id: 2,
      ex: [
        {
          year: '2022',
          title: 'Fullstack Developer Intern',
          company: 'BNI',
          at: 'Jakarta, Indonesia',
          desc: 'Responsible for developing video conferencing applications in serving customers with tellers in Bank Negara Indonesia. Implement a system for dividing the number of customers queuing with the number of available tellers. Customizing an open source applications in accordance with system requirements.'
        },
        {
          year: '2021',
          title: 'DTS Java Programming',
          company: 'KOMINFO',
          at: 'Malang, Indonesia',
          desc: 'Got an scholarship from Ministry of Communication and Information Technology of the Republic of Indonesia to learn Java Programming and completed Oracle certification. Through this program, I gained extensive knowledge and hands-on experience, and I am now better equipped to tackle complex programming challenges.'
        }
      ]
    },
    {
      id: 3,
      ex: [
        {
          year: '2021',
          title: 'Object Oriented Assistant',
          company: 'FILKOM',
          at: 'University of Brawijaya',
          desc: 'Responsible for teaching object-oriented programming to 87 new students divided into two classes. My approach was to provide them with challenges on the Hackerrank web platform, while creating a supportive environment where they could learn and collaborate.'
        },
        {
          year: '2020',
          title: 'Basic Programming Assistant',
          company: 'FILKOM',
          at: 'University of Brawijaya',
          desc: 'Responsible for helping 34 new students in learning basic programming using Java. Provide material and problem-based learning during learning to provide a good learning experience. Serving new students who consult about their problems in the program code.'
        }
      ]
    }
  ]
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
          <Bold content=" Full-Stack Developer" />. I specialize in using the{' '}
          <Bold content="MERN Stack" />, which includes
          <Bold content=" MongoDB, Express, React, Node.js" /> and other related
          technologies.
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
          <p className="font-light text-2xl text-center tracking-wider">
            Experiences
          </p>
        </div>

        <div className="flex flex-col space-y-5">
          {experiences.map((ex) => {
            const experience = ex
            return (
              <div
                key={experience.id}
                className="w-full flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-x-5 lg:space-y-0 items-start justify-end"
              >
                {experience.ex.map((exp, index) => (
                  <Experience
                    key={index}
                    year={exp.year}
                    title={exp.title}
                    company={exp.company}
                    at={exp.at}
                    desc={exp.desc}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
