import Image from 'next/image'
import clsx from 'clsx'

type HeroProps = {
  imageLight: `/${string}`
  imageDark: `/${string}`
  alt?: string
  lightOpacity?: number
  darkOpacity?: number
  className?: string
  variant?: 'default' | 'fixed'
}

export default function Hero({
  imageLight,
  imageDark,
  alt = '',
  lightOpacity,
  darkOpacity,
  className,
  variant = 'default',
}: HeroProps) {
  return (
    <div
      className={clsx(
        variant === 'fixed' ? 'fixed inset-0 -z-10' : 'absolute inset-0 -z-10',
        'overflow-hidden',
        className,
      )}>
      {/* Light mode */}
      <Image
        src={imageLight}
        alt={alt}
        fill
        sizes='100dvw'
        priority
        style={{ opacity: lightOpacity ?? 0.3 }}
        className='object-cover dark:hidden'
      />

      {/* Dark mode */}
      <Image
        src={imageDark}
        alt={alt}
        fill
        sizes='100dvw'
        priority
        style={{ opacity: darkOpacity ?? 0.3 }}
        className='hidden object-cover dark:block'
      />

      <div className='absolute inset-0 bg-black/10' />
    </div>
  )
}
