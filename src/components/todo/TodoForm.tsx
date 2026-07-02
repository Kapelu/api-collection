// components/TodoForm.tsx

'use client'

import { FormEvent, useMemo, useState } from 'react'
import { createTodo, Todo } from '@/lib/todo'

interface TodoFormProps {
  onAdd(todo: Todo): void
}

function getDefaultDateTime(): string {
  const date = new Date()
  date.setMinutes(date.getMinutes() + 30)

  const offset = date.getTimezoneOffset()
  const local = new Date(date.getTime() - offset * 60_000)

  return local.toISOString().slice(0, 16)
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const initialDate = useMemo(getDefaultDateTime, [])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(initialDate)
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!title.trim()) return

    onAdd(
      createTodo({
        title,
        description,
        dueDate,
        priority,
      }),
    )

    setTitle('')
    setDescription('')
    setPriority('medium')
    setDueDate(getDefaultDateTime())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4 rounded-xl border border-[#586e75] bg-[#073642] p-6 shadow-lg'>
      <div>
        <label className='mb-2 block text-sm font-semibold text-[#93a1a1]'>
          Título
        </label>

        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Nueva tarea...'
          required
          className='w-full rounded-lg border border-[#586e75] bg-[#002b36] px-4 py-3 text-[#eee8d5] outline-none transition focus:border-[#268bd2]'
        />
      </div>

      <div>
        <label className='mb-2 block text-sm font-semibold text-[#93a1a1]'>
          Descripción
        </label>

        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Descripción opcional...'
          className='w-full resize-none rounded-lg border border-[#586e75] bg-[#002b36] px-4 py-3 text-[#eee8d5] outline-none transition focus:border-[#268bd2]'
        />
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <label className='mb-2 block text-sm font-semibold text-[#93a1a1]'>
            Fecha y hora
          </label>

          <input
            type='datetime-local'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className='w-full rounded-lg border border-[#586e75] bg-[#002b36] px-4 py-3 text-[#eee8d5] outline-none transition focus:border-[#268bd2]'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-semibold text-[#93a1a1]'>
            Prioridad
          </label>

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as 'low' | 'medium' | 'high')
            }
            className='w-full rounded-lg border border-[#586e75] bg-[#002b36] px-4 py-3 text-[#eee8d5] outline-none transition focus:border-[#268bd2]'>
            <option value='low'>Baja</option>
            <option value='medium'>Media</option>
            <option value='high'>Alta</option>
          </select>
        </div>
      </div>

      <button
        type='submit'
        className='w-full rounded-lg bg-[#268bd2] px-5 py-3 font-semibold text-white transition hover:bg-[#2aa198]'>
        Agregar tarea
      </button>
    </form>
  )
}
