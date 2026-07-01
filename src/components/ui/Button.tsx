import Link from 'next/link'
import clsx from 'clsx'
import type React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'menu'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  href?: string
  target?: string
  rel?: string
  download?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-md border border-secondary font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 !no-underline [&>p]:m-0 [&>p]:leading-none'

const variants = {
  primary:
    'rounded-lg border-primary bg-primary text-background hover:brightness-110',

  secondary:
    'rounded-lg border-border bg-surface text-foreground hover:bg-surface-2',

  ghost:
    'rounded-lg border-transparent bg-transparent text-foreground hover:bg-surface',

  menu: 'block w-full rounded-lg p-4 text-center text-xl font-bold text-heading hover:bg-surface',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  href,
  children,
  disabled,
  target,
  rel,
  download,
  ...props
}: ButtonProps) {
  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    loading && 'cursor-wait opacity-70',
    className,
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}>
        {children}
      </Link>
    )
  }

  return (
    <button disabled={disabled || loading} className={classes} {...props}>
      {loading ? (
        <>
          {/* Spinner opcional */}
          Cargando...
        </>
      ) : (
        children
      )}
    </button>
  )
}

{
  /*
  1. Como botón: Para ejecutar una acción (onClick, submit, etc.):

    <Button onClick={() => alert('Hola')}>
      Click aquí
    </Button>

  2. Como botón de envío de un formulario

    <Button type="submit">Agregar</Button>

    o con estado de carga: Cuando loading es true mostrará: Cargando... y quedará deshabilitado.

    <Button
      type="submit"
      loading={isLoading}
    >
      Guardar
    </Button>

    

  3. Como enlace interno
    <Button href="/todo-list">
      Ir a Todo List
    </Button>

    Internamente renderiza:

    <Link href="/todo-list">

  4. Como enlace externo
    <Button
      href="https://github.com/kapelu"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Button>

  5. Descargar un archivo
    <Button
      href="/cv.pdf"
      download="Daniel-Calderon-CV.pdf"
    >
      Descargar CV
    </Button>

  6. Cambiar el estilo
    <Button variant="primary">
      Principal
    </Button>

    <Button variant="secondary">
      Secundario
    </Button>

    <Button variant="ghost">
      Ghost
    </Button>

    <Button variant="menu">
      Menú
    </Button>

  7. Cambiar el tamaño
    <Button size="sm">
      Pequeño
    </Button>

    <Button size="md">
      Mediano
    </Button>

    <Button size="lg">
      Grande
    </Button>

  8. Agregar clases propias
    <Button
      className="w-full"
    >
      Guardar
    </Button>

    o

    <Button
      variant="secondary"
      className="mt-6"
    >
      Cancelar
    </Button>
*/
}