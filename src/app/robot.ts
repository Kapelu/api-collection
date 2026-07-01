import type { MetadataRoute } from 'next'

import { AppConfig } from '@/lib/AppConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${AppConfig.url}/sitemap.xml`,
    host: AppConfig.url,
  }
}
