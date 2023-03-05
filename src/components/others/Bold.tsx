interface BoldProps {
    content: string
}

export default function Bold (props: BoldProps) {
  const { content } = props
  return <span className="font-semibold">{content}</span>
}
