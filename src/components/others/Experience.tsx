interface ExperienceProps {
  year: string;
  title: string;
  company: string;
  at: string;
  desc: string;
}

export default function Experience (props: ExperienceProps) {
  const { year, title, company, at, desc } = props
  return (
    <div className="w-full collapse collapse-arrow px-0 sm:px-5">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex flex-row">
          <p className="tetx-lg font-semibold text-[#B300A4] dark:text-[#4242BC] duration-300 pr-10 sm:text-xl">{year}</p>

          <div className="flex flex-col">
            <p className="text-xl font-medium sm:text-2xl">{title}</p>
            <p className="text-sm font-light sm:text-base">
              <span className="font-medium">{company}</span> • {at}
            </p>
          </div>
        </div>
      </div>
      <div className="collapse-content flex flex-col space-y-2">
        <div className="w-full h-0.5 rounded-full bg-pink-400 dark:bg-blue-400 transition-all duration-500" />
        <p className='text-sm font-light'>
          {desc}
        </p>
      </div>
    </div>
  )
}
