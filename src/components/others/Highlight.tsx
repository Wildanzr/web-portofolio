interface IHighlightProps {
  content: string;
}

export default function Highlight (props: IHighlightProps) {
  const { content } = props
  return (
    <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600 dark:from-blue-400 dark:to-pink-400 duration-500 ease-out">
      {content}
    </span>
  )
}
