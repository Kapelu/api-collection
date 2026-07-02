// components/TodoItem.tsx

'use client'

import { Todo, isExpired } from '@/lib/todo'
import Countdown from './Countdown'

interface TodoItemProps {
  todo: Todo
  onToggle(id: string): void
  onDelete(id: string): void
  onEdit(todo: Todo): void
}

const priorityStyles = {
  low: 'bg-[#2aa198]/20 text-[#2aa198] border-[#2aa198]',
  medium: 'bg-[#b58900]/20 text-[#b58900] border-[#b58900]',
  high: 'bg-[#dc322f]/20 text-[#dc322f] border-[#dc322f]',
}

const priorityLabel = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
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
      className={`rounded-xl border p-5 transition-all ${
        todo.status === 'completed'
          ? 'border-[#586e75] bg-[#002b36]/70 opacity-70'
          : expired
            ? 'border-[#dc322f] bg-[#3b0f10]'
            : 'border-[#586e75] bg-[#073642]'
      }`}>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
        <div className='flex-1 space-y-3'>
          <div className='flex flex-wrap items-center gap-2'>
            <h3
              className={`text-xl font-bold ${
                todo.status === 'completed'
                  ? 'line-through text-[#93a1a1]'
                  : 'text-[#eee8d5]'
              }`}>
              {todo.title}
            </h3>

            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${priorityStyles[todo.priority]}`}>
              {priorityLabel[todo.priority]}
            </span>

            {expired && todo.status === 'pending' && (
              <span className='rounded-full bg-[#dc322f] px-3 py-1 text-xs font-bold text-white'>
                Vencida
              </span>
            )}

            {todo.status === 'completed' && (
              <span className='rounded-full bg-[#859900] px-3 py-1 text-xs font-bold text-white'>
                Completada
              </span>
            )}
          </div>

          {todo.description && (
            <p className='whitespace-pre-wrap text-[#93a1a1]'>
              {todo.description}
            </p>
          )}

          <div className='space-y-1 text-sm text-[#839496]'>
            <p>
              <strong>Vence:</strong> {new Date(todo.dueDate).toLocaleString()}
            </p>

            <p>
              <strong>Creada:</strong>{' '}
              {new Date(todo.createdAt).toLocaleString()}
            </p>

            {todo.completedAt && (
              <p>
                <strong>Completada:</strong>{' '}
                {new Date(todo.completedAt).toLocaleString()}
              </p>
            )}
          </div>

          {todo.status === 'pending' && <Countdown dueDate={todo.dueDate} />}
        </div>

        <div className='flex flex-wrap gap-2 lg:flex-col'>
          <button
            type='button'
            onClick={() => onToggle(todo.id)}
            className={`rounded-lg px-4 py-2 font-semibold text-white transition ${
              todo.status === 'completed'
                ? 'bg-[#b58900] hover:bg-[#cb9b16]'
                : 'bg-[#859900] hover:bg-[#6c8c00]'
            }`}>
            {todo.status === 'completed' ? 'Reabrir' : 'Completar'}
          </button>

          <button
            type='button'
            onClick={() => onEdit(todo)}
            className='rounded-lg bg-[#268bd2] px-4 py-2 font-semibold text-white transition hover:bg-[#2aa198]'>
            Editar
          </button>

          <button
            type='button'
            onClick={() => onDelete(todo.id)}
            className='rounded-lg bg-[#dc322f] px-4 py-2 font-semibold text-white transition hover:bg-[#b81f1b]'>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  )
}
