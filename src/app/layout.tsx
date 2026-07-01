import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import { ComeBack } from '@/components/ui/ComeBack'
import { AppConfig } from '@/lib/AppConfig'
import { gentium } from './fonts'
import { Providers } from './providers'
import { Container } from '@/components/layout/Container'

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),

  title: {
    default: AppConfig.title,
    template: '%s | Daniel Calderon',
  },

  description: AppConfig.description,

  manifest: '/manifest.json',

  keywords: AppConfig.keywords,

  authors: [
    {
      name: AppConfig.author,
    },
  ],

  creator: AppConfig.author,
  publisher: AppConfig.author,

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: AppConfig.url,
  },

  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: AppConfig.url,
    siteName: AppConfig.site_name,
    locale: AppConfig.locale,
    type: 'website',

    images: [
      {
        url: AppConfig.image,
        width: 1200,
        height: 630,
        alt: AppConfig.title,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: AppConfig.title,
    description: AppConfig.description,
    creator: '@kapelu',
    images: [AppConfig.image],
  },

  category: 'technology',
  applicationName: AppConfig.site_name,
  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={`scroll-smooth dark ${gentium.variable}`}
      suppressHydrationWarning
      data-scroll-behavior='smooth'>
      <body className='font-gentium bg-background text-text'>
        <Providers>
          <div className='flex min-h-screen flex-col pb-16 lg:pb-0'>
            <ComeBack />

            <Header />

            <main id='main-content' className='flex-1'>
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
