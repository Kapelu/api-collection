import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import Hero from '../layout/Hero'
import HeaderApi from '../layout/HeaderApi'
import { getSimpsons } from '@/data/simpsons'
import SimpsonsClient from '@/app/simpson/SimpsonsClient'

export default async function SimpsonsPage() {
  const simpsons = await getSimpsons()

  return (
    <Container>
      <Hero
        imageLight='/images/simpson/bg-light.webp'
        imageDark='/images/bg-dark.svg'
        alt='Hero background space'
        lightOpacity={0.9}
        variant='fixed'
      />

      <section className='mx-auto max-w-4xl py-16'>
        <HeaderApi
          image='/images/simpson/logo.webp'
          url='https://github.com/Kapelu/api_collection/blob/main/src/components/pages/SimpsonPage.tsx'
          alt='Los Simpson'
        />

        <SimpsonsClient simpsons={simpsons} />
      </section>
    </Container>
  )
}
