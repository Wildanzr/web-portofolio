interface TitleSectionProps {
    title: string
}

export default function TitleSection (props: TitleSectionProps) {
  const { title } = props
  return (
    <div className="w-full flex flex-col py-5">
        <p className="w-full text-center text-3xl font-medium tracking-wide">{title}</p>
      </div>
  )
}
