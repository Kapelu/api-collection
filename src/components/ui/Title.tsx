type TitleProps = {
  title: string
  italic?: boolean
}

export function Title({ title, italic = false }: TitleProps) {
  return (
    <h2
      className={`
        mx-auto
        my-8
        w-62.5
        border-y
        border-primary
        px-4
        py-2
        text-center
        text-3xl
        font-semibold
        ${italic ? 'italic' : 'not-italic'}
      `}>
      {title}
    </h2>
  )
}
