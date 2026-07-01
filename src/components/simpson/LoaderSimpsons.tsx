import clsx from 'clsx'

type LoaderSimpsonProps = {
  color1?: string
  color2?: string
  size?: number
  className?: string
}

export default function LoaderSimpson({
  color1 = '#ffffff',
  color2 = '#ff3d00',
  size = 48,
  className,
}: LoaderSimpsonProps) {
  return (
    <span
      className={clsx('loader-simpson', className)}
      style={
        {
          '--loader-color-1': color1,
          '--loader-color-2': color2,
          '--loader-size': `${size}px`,
        } as React.CSSProperties
      }
    />
  )
}