'use client'

import Link from 'next/link'
import { Logo } from '../ui/Logo'
import { Container } from './Container'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='border-t border-border bg-background pt-3 pb-(--mobile-header-height) text-title lg:pb-0'>
      <Container>
        <div className='flex flex-col gap-4 pb-1 md:grid md:grid-cols-3 md:items-center'>
          {/* Logo */}
          <div className='flex justify-center md:justify-start'>
            <Logo className='transition-opacity hover:opacity-50' />
          </div>

          {/* Centro */}
          <div className='text-center text-sm text-title'>
            <p>2023 - {year} All Rights Reserved</p>

            <p>
              Realizado con 💛 por{' '}
              <Link
                href='https://github.com/Kapelu'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-link hover:underline'>
                @KWS
              </Link>
            </p>
          </div>

          {/* Links */}
          <div className='flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end'>
            <Link
              href='/privacidad'
              className='font-semibold text-link hover:underline'>
              Política de privacidad
            </Link>

            <Link
              href='/cookies'
              className='font-semibold text-link hover:underline'>
              Política de cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
