'use client'

import { Todo, isExpired } from '@/data/todo'
import { Button } from '../ui/Button'
import Countdown from './Countdown'

interface TodoItemProps {
  todo: Todo
  onToggle(id: string): void
  onDelete(id: string): void
  onEdit(todo: Todo): void
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const expired = isExpired(todo)

  return (
    <article
      className={`rounded-xl border p-5 bg-surface text-foreground border-border ${
        todo.status === 'completed'
          ? 'opacity-60'
          : expired
            ? 'border-danger'
            : ''
      }`}>
      <div className='flex justify-between gap-4'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h3
              className={`text-lg font-bold ${
                todo.status === 'completed'
                  ? 'line-through text-muted'
                  : 'text-heading'
              }`}>
              {todo.title}
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold border ${
                todo.priority === 'high'
                  ? 'bg-danger/20 text-danger border-danger'
                  : todo.priority === 'medium'
                    ? 'bg-warning/20 text-warning border-warning'
                    : 'bg-secondary/20 text-secondary border-secondary'
              }`}>
              {todo.priority === 'high'
                ? 'Alta'
                : todo.priority === 'medium'
                  ? 'Media'
                  : 'Baja'}
            </span>
          </div>

          <p className='text-muted text-sm'>{todo.description}</p>

          <p className='text-sm text-muted'>
            Vence: {new Date(todo.dueDate).toLocaleString()}
          </p>

          {todo.status === 'pending' && <Countdown dueDate={todo.dueDate} />}
        </div>

        <div className='flex flex-col gap-2'>
          <Button
            onClick={() => onToggle(todo.id)}
            variant='secondary'
            className='rounded bg-secondary px-3 py-1 text-text'>
            {todo.status === 'completed' ? 'Reabrir' : 'Completar'}
          </Button>

          <Button
            onClick={() => onEdit(todo)}
            variant='secondary'
            className='rounded bg-secondary px-3 py-1 text-text'>
            Editar
          </Button>

          <Button
            onClick={() => onDelete(todo.id)}
            variant='secondary'
            className='rounded bg-secondary px-3 py-1 text-text'>
            Eliminar
          </Button>
        </div>
      </div>
    </article>
  )
}
