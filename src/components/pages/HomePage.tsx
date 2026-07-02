import { Container } from '@/components/layout/Container'
import Hero from '../layout/Hero'
import HeaderApi from '../layout/HeaderApi'

import HomeContent from '@/mdx/home.mdx'

export default function HomePage() {
  return (
    <Container>
      <Hero
        imageLight='/images/bg-light.svg'
        imageDark='/images/bg-dark.svg'
        alt='Hero background space'
        lightOpacity={0.6}
        variant='fixed'
      />

      <section className='relative min-h-screen py-16'>
        <div className='mx-auto max-w-5xl rounded-2xl border border-border bg-surface/40 backdrop-blur-xl shadow-lg p-6'>
          <HeaderApi
            title='API Kapelu'
            italic
            url='https://github.com/Kapelu/api-collection/blob/main/src/components/pages/HomePage.tsx'
          />
          <HomeContent />
        </div>
      </section>
    </Container>
  )
}


