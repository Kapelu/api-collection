import Image from 'next/image'
import type { Simpson } from '@/data/simpsons'

type Props = {
  simpson: Simpson
}

export default function SimpsonCard({ simpson }: Props) {
  return (
    <article className='group block overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-warning hover:shadow-xl hover:shadow-warning'>
      <header className='p-6 pb-2 text-center'>
        <div className='mx-auto mb-2 h-32 w-32 overflow-hidden rounded-xl transition-shadow duration-300 group-hover:shadow-[0_0_60px_var(--warning)]'>
          <Image
            src={simpson.image}
            alt={simpson.name}
            width={120}
            height={120}
            className='h-full w-full object-cover '
          />
        </div>

        <h3 className='truncate text-xl font-bold text-heading'>
          {simpson.name}
        </h3>

        <p className='mt-2 line-clamp-2 min-h-10 text-sm text-muted'>
          {simpson.occupation}
        </p>
      </header>

      <div className='mt-auto space-y-4 p-6 pt-0'>
        <div className='flex justify-center gap-2'>
          <span className='rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground'>
            Edad: {simpson.age}
          </span>

          <span className='rounded-full border border-success bg-success/10 px-3 py-1 text-xs font-medium text-success'>
            {simpson.status}
          </span>
        </div>
      </div>
    </article>
  )
}
