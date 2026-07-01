'use client'

import SimpsonCard from '@/components/simpson/SimpsonCard'
import SimpsonModal from '@/components/simpson/SimpsonModal'
import { Simpson, SimpsonDetail, getSimpsonById } from '@/data/simpsons'
import { useState } from 'react'

type Props = {
  simpsons: Simpson[]
}

export default function SimpsonsClient({ simpsons }: Props) {
  const [selected, setSelected] = useState<SimpsonDetail | null>(null)

  const handleOpen = async (id: number) => {
    const data = await getSimpsonById(id)
    setSelected(data)
  }

  return (
    <>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {simpsons.map((s) => (
          <div key={s.id} onClick={() => handleOpen(s.id)}>
            <SimpsonCard simpson={s} />
          </div>
        ))}
      </div>

      <SimpsonModal simpson={selected} onClose={() => setSelected(null)} />
    </>
  )
}
