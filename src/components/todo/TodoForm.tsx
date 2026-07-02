'use client'

import { createTodo, Todo, TodoPriority } from '@/data/todo'
import { FormEvent, useEffect, useState } from 'react'
import { Button } from '../ui/Button'

interface TodoFormProps {
  editingTodo: Todo | null
  onAdd(todo: Todo): void
  onUpdate(todo: Todo): void
  onCancelEdit(): void
}

function getDefaultDateTime(): string {
  const date = new Date()
  date.setMinutes(date.getMinutes() + 30)

  const offset = date.getTimezoneOffset()
  const local = new Date(date.getTime() - offset * 60_000)

  return local.toISOString().slice(0, 16)
}

export default function TodoForm({
  editingTodo,
  onAdd,
  onUpdate,
  onCancelEdit,
}: TodoFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState(getDefaultDateTime())
  const [priority, setPriority] = useState<TodoPriority>('medium')

  useEffect(() => {
    if (!editingTodo) {
      setTitle('')
      setDescription('')
      setPriority('medium')
      setDueDate(getDefaultDateTime())
      return
    }

    setTitle(editingTodo.title)
    setDescription(editingTodo.description)
    setDueDate(editingTodo.dueDate)
    setPriority(editingTodo.priority)
  }, [editingTodo])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!title.trim()) return

    if (editingTodo) {
      onUpdate({
        ...editingTodo,
        title: title.trim(),
        description: description.trim(),
        dueDate,
        priority,
      })
      return
    }

    onAdd(
      createTodo({
        title,
        description,
        dueDate,
        priority,
      }),
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-5 rounded-xl border border-border bg-surface p-6 text-foreground'>
      <h2 className='text-heading text-xl font-bold'>
        {editingTodo ? 'Editar tarea' : 'Nueva tarea'}
      </h2>

      <input
        className='w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Título'
      />

      <textarea
        className='w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Descripción'
      />

      <input
        type='datetime-local'
        className='w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <select
        className='w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary'
        value={priority ?? 'medium'}
        onChange={(e) => setPriority(e.target.value as TodoPriority)}>
        <option value='low'>Baja</option>
        <option value='medium'>Media</option>
        <option value='high'>Alta</option>
      </select>

      <Button
        variant='primary'
        className='w-full rounded-lg bg-secondary px-4 py-3 font-semibold text-text hover:opacity-90'>
        {editingTodo ? 'Guardar cambios' : 'Agregar tarea'}
      </Button>

      {editingTodo && (
        <Button
          variant='primary'
          type='button'
          onClick={onCancelEdit}
          className='w-full rounded-lg bg-secondary px-4 py-3 font-semibold text-text'>
          Cancelar
        </Button>
      )}
    </form>
  )
}
