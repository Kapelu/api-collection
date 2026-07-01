'use client'

import { Todo } from '@/data/todo'
import { useState } from 'react'
import Countdown from './Countdown'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newText: string, newTime: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [editTime, setEditTime] = useState(todo.time)

  const handleSave = () => {
    if (!editText.trim() || !editTime) return

    onEdit(todo.id, editText, editTime)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setEditTime(todo.time)
    setIsEditing(false)
  }

  return (
    <div className='flex items-center justify-between rounded-lg border border-border bg-surface p-4'>
      {/* LEFT */}
      <div className='flex-1'>
        {isEditing ? (
          <div className='flex flex-col gap-2'>
            {/* TEXT */}
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className='rounded border border-border bg-background px-3 py-2 text-foreground'
            />

            {/* TIME ✅ FIX REAL */}
            <input
              type='time'
              value={editTime}
              onChange={(e) => setEditTime(e.target.value)}
              className='rounded border border-border bg-background px-3 py-2 text-foreground'
            />
          </div>
        ) : (
          <>
            <h3
              className={`font-semibold ${
                todo.completed ? 'line-through text-muted' : 'text-foreground'
              }`}>
              {todo.text}
            </h3>

            <p className='text-sm text-muted'>Hora: {todo.time}</p>

            {!todo.completed && (
              <span className='text-sm text-secondary'>
                <Countdown time={todo.time} />
              </span>
            )}
          </>
        )}
      </div>

      {/* ACTIONS */}
      <div className='flex gap-2'>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className='rounded-lg p-2 text-warning hover:bg-warning/10'>
            ✏️
          </button>
        )}

        {isEditing && (
          <>
            <button
              onClick={handleSave}
              className='rounded-lg p-2 text-success hover:bg-success/10'>
              ✔
            </button>

            <button
              onClick={handleCancel}
              className='rounded-lg p-2 text-muted hover:bg-surface-2'>
              ✕
            </button>
          </>
        )}

        {!isEditing && (
          <button
            onClick={() => onToggle(todo.id)}
            className='rounded-lg p-2 text-success hover:bg-success/10'>
            ✔
          </button>
        )}

        <button
          onClick={() => onDelete(todo.id)}
          className='rounded-lg p-2 text-danger hover:bg-danger/10'>
          🗑️
        </button>
      </div>
    </div>
  )
}
