type Props = {
  children: string
}

export function Note({ children }: Props) {
  return (
    <div className='my-6 rounded-lg border border-blue-500 bg-blue-500/10 p-4'>
      {children}
    </div>
  )
}
