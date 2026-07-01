'use client'

import { Todo } from '@/data/todo'
import { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('todos')

    if (saved) {
      try {
        setTodos(JSON.parse(saved))
      } catch {
        setTodos([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string, time: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        time,
        completed: false,
      },
    ])
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // actualiza time
  const editTodo = (id: string, newText: string, newTime: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText, time: newTime } : todo,
      ),
    )
  }

  return (
    <div className='mx-auto flex max-w-3xl flex-col items-center'>
      <TodoForm onAdd={addTodo} />

      <div className='w-full space-y-4'>
        {todos.length === 0 ? (
          <p className='text-center text-muted'>No hay tareas aún</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>
    </div>
  )
}
