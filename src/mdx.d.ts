declare module '*.mdx' {
  import { ComponentType } from 'react'

  const MDXComponent: ComponentType<Record<string, never>>

  export default MDXComponent
}
