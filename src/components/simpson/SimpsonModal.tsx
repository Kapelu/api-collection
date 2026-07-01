'use client'

import Image from 'next/image'
import { SimpsonDetail } from '@/data/simpsons'

type Props = {
  simpson: SimpsonDetail | null
  onClose: () => void
}

export default function SimpsonModal({ simpson, onClose }: Props) {
  if (!simpson) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='
          relative w-[90%] max-w-2xl
          rounded-2xl border bg-surface p-8
          shadow-2xl
        '
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-xl'
        >
          ✕
        </button>

        <div className='flex flex-col items-center gap-4 text-center'>
          <div className='h-64 w-64 overflow-hidden rounded-xl'>
            <Image
              src={`https://cdn.thesimpsonsapi.com/500${simpson.portrait_path}`}
              alt={simpson.name}
              width={300}
              height={300}
              className='h-full w-full object-cover'
            />
          </div>

          <h2 className='text-3xl font-bold'>{simpson.name}</h2>

          <p className='text-lg'>Edad: {simpson.age}</p>

          <p className='text-muted'>{simpson.description}</p>
        </div>
      </div>
    </div>
  )
}