import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'solarized-dark',
            light: 'solarized-light',
          },
          keepBackground: false,
        },
      ],
    ],
  },
})

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.thesimpsonsapi.com',
      },
    ],
  },
}

export default withMDX(nextConfig)