'use client'

import { Todo, sortTodos } from '@/data/todo'
import TodoItem from './TodoItem'

interface Props {
  todos: Todo[]
  onToggle(id: string): void
  onDelete(id: string): void
  onEdit(todo: Todo): void
}

export default function TodoList({ todos, onToggle, onDelete, onEdit }: Props) {
  const ordered = sortTodos(todos)

  const pending = ordered.filter((t) => t.status === 'pending')

  const completed = ordered.filter((t) => t.status === 'completed')

  return (
    <div className='space-y-8'>
      <section>
        <h2 className='text-warning text-lg font-bold'>
          Pendientes ({pending.length})
        </h2>

        <div className='space-y-3'>
          {pending.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-success text-lg font-bold'>
          Completadas ({completed.length})
        </h2>

        <div className='space-y-3'>
          {completed.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
