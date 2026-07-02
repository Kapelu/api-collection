// components/Countdown.tsx

'use client'

import { useEffect, useState } from 'react'
import { timeRemaining } from '@/lib/todo'

interface CountdownProps {
  dueDate: string
}

function pad(value: number) {
  return value.toString().padStart(2, '0')
}

export default function Countdown({ dueDate }: CountdownProps) {
  const [remaining, setRemaining] = useState(timeRemaining(dueDate))

  useEffect(() => {
    const update = () => {
      setRemaining(timeRemaining(dueDate))
    }

    update()

    const interval = window.setInterval(update, 1000)

    return () => window.clearInterval(interval)
  }, [dueDate])

  if (remaining.expired) {
    return (
      <div className='mt-4 rounded-lg border border-[#dc322f] bg-[#dc322f]/15 p-3'>
        <div className='font-semibold text-[#dc322f]'>⏰ Tiempo agotado</div>

        <div className='mt-1 text-sm text-[#dc322f]'>
          La fecha límite ya fue alcanzada.
        </div>
      </div>
    )
  }

  return (
    <div className='mt-4 rounded-lg border border-[#2aa198] bg-[#2aa198]/10 p-3'>
      <div className='mb-2 text-sm font-semibold uppercase tracking-wide text-[#2aa198]'>
        Cuenta regresiva
      </div>

      <div className='grid grid-cols-4 gap-2 text-center'>
        <div className='rounded-md bg-[#002b36] p-2'>
          <div className='text-xl font-bold text-[#eee8d5]'>
            {remaining.days}
          </div>

          <div className='text-xs text-[#93a1a1]'>Días</div>
        </div>

        <div className='rounded-md bg-[#002b36] p-2'>
          <div className='text-xl font-bold text-[#eee8d5]'>
            {pad(remaining.hours)}
          </div>

          <div className='text-xs text-[#93a1a1]'>Horas</div>
        </div>

        <div className='rounded-md bg-[#002b36] p-2'>
          <div className='text-xl font-bold text-[#eee8d5]'>
            {pad(remaining.minutes)}
          </div>

          <div className='text-xs text-[#93a1a1]'>Min</div>
        </div>

        <div className='rounded-md bg-[#002b36] p-2'>
          <div className='text-xl font-bold text-[#eee8d5]'>
            {pad(remaining.seconds)}
          </div>

          <div className='text-xs text-[#93a1a1]'>Seg</div>
        </div>
      </div>
    </div>
  )
}
