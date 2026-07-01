import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className='mb-6 text-5xl font-bold text-heading' {...props} />
    ),

    h2: (props) => (
      <h2
        className='mt-12 mb-4 text-3xl font-semibold text-heading'
        {...props}
      />
    ),

    h3: (props) => (
      <h3
        className='mt-8 mb-2 text-2xl font-semibold text-heading'
        {...props}
      />
    ),

    p: (props) => (
      <p className='mb-2 leading-8 text-muted-foreground' {...props} />
    ),

    ul: (props) => <ul className='my-6 space-y-3' {...props} />,

    li: (props) => (
      <li className='flex items-start pl-6 gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          className='mt-1 h-5 w-5 shrink-0 text-green-500'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5 13l4 4L19 7'
          />
        </svg>

        <span>{props.children}</span>
      </li>
    ),

    hr: () => (
      <hr className='my-10 border-neutral-300 dark:border-neutral-700' />
    ),

    a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal =
        href?.startsWith('http://') || href?.startsWith('https://')

      return (
        <Link
          href={href ?? '#'}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        />
      )
    },

    ol: (props) => (
      <ol className='mb-5 list-decimal space-y-2 pl-6' {...props} />
    ),

    code: ({ children, ...props }) => {
      const isInline = !props.className

      if (isInline) {
        return (
          <code
            className='rounded bg-neutral-200 px-1.5 py-0.5 text-sm font-mono text-success dark:bg-surface'
            {...props}>
            {children}
          </code>
        )
      }

      // código en bloque (``` ```)
      return (
        <pre className='my-3 overflow-x-auto rounded bg-neutral-900 p-2 text-sm text-white'>
          <code {...props}>{children}</code>
        </pre>
      )
    },

    strong: (props) => (
      <strong
        className='
      rounded
      bg-primary/10
      px-1
      font-semibold
      text-primary
    '
        {...props}
      />
    ),

    em: (props) => <em className='italic text-warning' {...props} />,

    blockquote: (props) => (
      <blockquote
        className='my-6 border-l-4 border-primary pl-4 italic'
        {...props}
      />
    ),

    table: (props) => <table className='w-full border-collapse' {...props} />,

    ...components,
  }
}
