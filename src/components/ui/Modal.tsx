'use client'

import { useRouter } from 'next/navigation'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: Props) {
  const router = useRouter()

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm'
      onClick={onClose}>
      <div
        className='relative w-[90%] max-w-2xl rounded-2xl border bg-surface p-8 shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        {/* cerrar */}
        <button onClick={onClose} className='absolute right-4 top-4 text-xl'>
          ✕
        </button>

        <div className='flex flex-col items-center gap-4 text-center'>
          <h2 className='text-3xl font-bold'>AVISO !!!</h2>

          {/* 3 P */}
          <div className='text-muted space-y-2'>
            <p>No se ha realizado ninguna subida real.</p>
            <p>Este modal solo es de confirmación.</p>
            <p>Para que funcione tiene que tener cuenta en cluodinary.</p>
            <p>y realizar las configuraciones correspondiente.</p>
          </div>

          {/* BOTÓN FINAL */}
          <button
            onClick={() => router.push('https://api-kapelu.vercel.app/upload')}
            className='mt-6 rounded-lg bg-primary px-6 py-3 font-semibold text-white'>
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  )
}
