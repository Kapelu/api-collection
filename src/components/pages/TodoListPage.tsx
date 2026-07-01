import { Container } from '@/components/layout/Container'
import Hero from '../layout/Hero'
import TodoList from '@/components/todo/TodoList'
import HeaderApi from '../layout/HeaderApi'

export default function TodoListPage() {
  return (
    <Container>
      <Hero
        imageLight='/images/bg-light.svg'
        imageDark='/images/bg-dark.svg'
        alt='Hero background space'
        lightOpacity={0.6}
        variant='fixed'
      />

      {/* GLASS SECTION */}
      <section className='relative min-h-screen py-16'>
        <div className='mx-auto max-w-5xl rounded-2xl border border-border bg-surface/40 backdrop-blur-xl shadow-lg p-6'>
          <HeaderApi
            title='ToDo List'
            url='https://github.com/Kapelu/api_collection/blob/main/src/components/pages/TodoListPage.tsx'
          />

          <TodoList />
        </div>
      </section>
    </Container>
  )
}
