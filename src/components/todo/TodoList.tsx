// components/TodoList.tsx

'use client'

import { sortTodos, Todo } from '@/lib/todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onToggle(id: string): void
  onDelete(id: string): void
  onEdit(todo: Todo): void
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  const orderedTodos = sortTodos(todos)

  if (orderedTodos.length === 0) {
    return (
      <div className='rounded-xl border border-[#586e75] bg-[#073642] p-10 text-center text-[#93a1a1]'>
        <p className='text-lg font-medium'>No hay tareas registradas.</p>

        <p className='mt-2 text-sm'>Agrega una nueva tarea para comenzar.</p>
      </div>
    )
  }

  const pending = orderedTodos.filter((todo) => todo.status === 'pending')

  const completed = orderedTodos.filter((todo) => todo.status === 'completed')

  return (
    <div className='space-y-8'>
      <section>
        <h2 className='mb-4 text-xl font-bold text-[#b58900]'>
          Pendientes ({pending.length})
        </h2>

        <div className='space-y-4'>
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
        <h2 className='mb-4 text-xl font-bold text-[#859900]'>
          Completadas ({completed.length})
        </h2>

        {completed.length === 0 ? (
          <div className='rounded-xl border border-dashed border-[#586e75] p-6 text-center text-[#657b83]'>
            Todavía no completaste ninguna tarea.
          </div>
        ) : (
          <div className='space-y-4'>
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
        )}
      </section>
    </div>
  )
}
