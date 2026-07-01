'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { Button } from '../ui/Button'

interface Props {
  onAdd: (text: string, time: string) => void
}

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!text || !time) return

    onAdd(text, time)

    setText('')
    setTime('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mb-8 grid w-full gap-4 rounded-xl border border-border bg-surface/70 p-4 backdrop-blur-md md:grid-cols-[1fr_150px_150px]'>
      <input
        id='todo-text'
        name='todo-text'
        type='text'
        placeholder='Nueva tarea...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={clsx(
          'w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted outline-none transition-colors',
          'focus:border-primary focus:ring-2 focus:ring-primary/20',
        )}
      />

      <input
        id='todo-time'
        name='todo-time'
        type='time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={clsx(
          'w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted outline-none transition-colors',
          'focus:border-primary focus:ring-2 focus:ring-primary/20',
        )}
      />

      <Button type='submit' variant='primary' className='h-full w-full'>
        Agregar
      </Button>
    </form>
  )
}
