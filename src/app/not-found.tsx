'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(6)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 6000)

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <section className='relative min-h-screen overflow-hidden bg-background'>
      {/* Luna */}
      <Image
        src='/images/404-1.png'
        alt='Moon'
        width={140}
        height={140}
        className='absolute top-12 right-2 z-5 h-auto animate-float opacity-90 md:top-24 md:right-30 md:w-50'
      />

      {/* Nubes */}
      <Image
        src='/images/404.png'
        alt='Clouds'
        fill
        priority
        sizes='(max-width: 1024px) 100vw, 1024px'
        className='absolute inset-0 z-20 animate-clouds object-cover object-left'
      />

      <div className='absolute inset-0 z-30 bg-background/20' />

      <div className='relative z-40 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
        <h1 className='font-gentium text-8xl font-bold text-title md:text-9xl'>
          404
        </h1>

        <h2 className='text-3xl font-semibold text-title'>
          Página no encontrada
        </h2>

        <p className='font-gentium max-w-md text-xl italic text-text'>
          Lo sentimos, la página que buscas se perdió entre las nubes y la luz
          de la luna.
        </p>

        <p className='text-sm text-text/80'>
          Serás redirigido al inicio en <strong>{countdown}</strong> segundo
          {countdown !== 1 && 's'}.
        </p>

        <Link
          href='/'
          className='rounded-lg border border-border px-6 py-3 text-link transition hover:bg-primary/10'>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
