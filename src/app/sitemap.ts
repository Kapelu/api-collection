import type { MetadataRoute } from 'next'

import { AppConfig } from '@/lib/AppConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: AppConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
