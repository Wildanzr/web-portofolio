interface ExperienceProps {
  year: string;
  title: string;
  at: string;
  place: string;
  pos: boolean;
}

export default function Experience (props: ExperienceProps) {
  const { year, title, at, place, pos } = props
  return (
    <div className={`w-full flex flex-row space-x-4 items-start justify-start ${pos ? 'lg:justify-start' : 'lg:justify-end'}`}>
      <p className="font-medium text-base md:text-lg lg:text-2xl text-pink-400 dark:text-blue-400">{year}</p>
      <div className="flex flex-col space-y-1 items-start justify-start">
        <p className="font-medium text-base md:text-lg lg:text-2xl">{title}</p>
        <p className="font-light text-xs md:text-sm lg:text-base">
          {at} • {place}
        </p>
      </div>
    </div>
  )
}
