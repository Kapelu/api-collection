'use client'
import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import HeaderApi from '../layout/HeaderApi'
import Hero from '../layout/Hero'
import TodoForm from '@/components/todo/TodoForm'
import TodoList from '@/components/todo/TodoList'
import { Todo } from '@/data/todo'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function TodoListPage() {
  const {
    value: todos,
    setValue: setTodos,
    isLoaded,
  } = useLocalStorage<Todo[]>('todos', [])

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

  function handleAddTodo(todo: Todo) {
    setTodos((prev) => [...prev, todo])
  }

  function handleUpdateTodo(updatedTodo: Todo) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    )

    setEditingTodo(null)
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

    if (editingTodo?.id === id) {
      setEditingTodo(null)
    }
  }

  function handleEdit(todo: Todo) {
    setEditingTodo(todo)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function handleCancelEdit() {
    setEditingTodo(null)
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

            <div className='py-16 text-center'>Cargando tareas...</div>
          </div>
        </section>
      </Container>
    )
  }

  return (
    <Container>
      <Hero
        imageLight='/images/bg-light.svg'
        imageDark='/images/bg-light.svg'
        alt='Hero background space'
        lightOpacity={0.6}
        darkOpacity={0.5}
        variant='fixed'
      />

      <section className='relative min-h-screen py-16'>
        <div className='mx-auto max-w-5xl space-y-8 rounded-2xl border border-border bg-surface/40 p-6 shadow-lg backdrop-blur-xl'>
          <HeaderApi
            title='ToDo List'
            url='https://github.com/Kapelu/api-collection/blob/main/src/components/pages/TodoListPage.tsx'
          />

          <TodoForm
            editingTodo={editingTodo}
            onAdd={handleAddTodo}
            onUpdate={handleUpdateTodo}
            onCancelEdit={handleCancelEdit}
          />

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
