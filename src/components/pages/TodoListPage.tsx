'use client'

import { Container } from '@/components/layout/Container'
import Hero from '../layout/Hero'
import HeaderApi from '../layout/HeaderApi'

import TodoForm from '@/components/todo/TodoForm'
import TodoList from '@/components/todo/TodoList'

import { Todo } from '@/lib/todo'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function TodoListPage() {
  const {
    value: todos,
    setValue: setTodos,
    isLoaded,
  } = useLocalStorage<Todo[]>('todos', [])

  function handleAddTodo(todo: Todo) {
    setTodos((prev) => [...prev, todo])
  }

  function handleToggle(id: string) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo

        if (todo.status === 'completed') {
          return {
            ...todo,
            status: 'pending',
            completedAt: undefined,
          }
        }

        return {
          ...todo,
          status: 'completed',
          completedAt: new Date().toISOString(),
        }
      }),
    )
  }

  function handleDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function handleEdit(updatedTodo: Todo) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    )
  }

  if (!isLoaded) {
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
          <div className='mx-auto max-w-5xl rounded-2xl border border-border bg-surface/40 p-6 shadow-lg backdrop-blur-xl'>
            <HeaderApi
              title='ToDo List'
              url='https://github.com/Kapelu/api_collection/blob/main/src/components/pages/TodoListPage.tsx'
            />

            <div className='py-20 text-center text-muted-foreground'>
              Cargando tareas...
            </div>
          </div>
        </section>
      </Container>
    )
  }

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
        <div className='mx-auto max-w-5xl space-y-8 rounded-2xl border border-border bg-surface/40 p-6 shadow-lg backdrop-blur-xl'>
          <HeaderApi
            title='ToDo List'
            url='https://github.com/Kapelu/api_collection/blob/main/src/components/pages/TodoListPage.tsx'
          />

          <TodoForm onAdd={handleAddTodo} />

          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </section>
    </Container>
  )
}
