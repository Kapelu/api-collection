import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

export function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8',
          className
        )
      )}>
      {children}
    </div>
  )
}

/*
mx-auto   → centra el contenedor horizontalmente.
w-full    → ocupa todo el ancho disponible.
max-w-5xl → limita el ancho máximo (~1024 px).
px-4      → 16 px de padding en móviles.
sm:px-6   → 24 px de padding en tablets (≥640 px).
lg:px-8   → 32 px de padding en desktop (≥1024 px).

No necesitás sizes, center ni lógica extra.
Un pequeño ajuste: usaría max-w-4xl o max-w-5xl según el contenido:
max-w-4xl (~896 px) → blogs, artículos, mucho texto.
max-w-5xl (~1024 px) → portafolios, grids de proyectos, landing pages.
max-w-6xl (~1152 px) → dashboards o galerías muy amplias.
*/
