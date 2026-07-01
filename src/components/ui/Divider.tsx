type DividerProps = {
  pattern?: string
  color?: string
}

export function Divider({
  pattern = '',
  color = 'text-primary',
}: DividerProps) {
  return (
    <div
      className='my-8 overflow-hidden rounded-xl  whitespace-nowrap bg-surface font-mono text-2xl text-surface dark:bg-linear-to-b
from-[#2563ba] from-15%
via-[#2989d8] via-50%
to-[#1e5799] to-85%'>
      {pattern.repeat(100)}
      {pattern.repeat(50)}
    </div>
  )
}
