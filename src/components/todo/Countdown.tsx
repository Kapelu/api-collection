'use client'

import { useEffect, useState } from 'react'

interface Props {
  time: string
}

export default function Countdown({ time }: Props) {
  const [remaining, setRemaining] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()

      const [hours, minutes] = time.split(':').map(Number)

      const target = new Date()
      target.setHours(hours)
      target.setMinutes(minutes)
      target.setSeconds(0)

      const diff = target.getTime() - now.getTime()

      if (diff <= 0) {
        setRemaining('⛔ Pasada')
        return
      }

      const h = Math.floor(diff / 1000 / 60 / 60)
      const m = Math.floor(diff / 1000 / 60) % 60
      const s = Math.floor(diff / 1000) % 60

      setRemaining(
        `${String(h).padStart(2, '0')}:${String(m).padStart(
          2,
          '0',
        )}:${String(s).padStart(2, '0')}`,
      )
    }

    update()

    const interval = setInterval(update, 1000)

    return () => clearInterval(interval)
  }, [time])

  return <span>{remaining}</span>
}
