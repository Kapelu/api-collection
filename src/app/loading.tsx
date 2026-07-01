import { Container } from '@/components/layout/Container'
import LoaderSimpson from '@/components/simpson/LoaderSimpsons'

export default function Loading() {
  return (
    <Container>
      <section className='flex min-h-screen items-center justify-center'>
        <LoaderSimpson
          color1='var(--primary)'
          color2='var(--warning)'
          size={60}
        />
      </section>
    </Container>
  )
}
