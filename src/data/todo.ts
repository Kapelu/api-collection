// lib/todo.ts

export type TodoPriority = 'low' | 'medium' | 'high'

export type TodoStatus = 'pending' | 'completed'

export interface Todo {
  id: string
  title: string
  description: string
  dueDate: string // datetime-local (YYYY-MM-DDTHH:mm)
  priority: TodoPriority
  status: TodoStatus
  createdAt: string
  completedAt?: string
}

export const PRIORITIES: TodoPriority[] = ['low', 'medium', 'high']

export function createTodo(data: {
  title: string
  description?: string
  dueDate: string
  priority?: TodoPriority
}): Todo {
  return {
    id: crypto.randomUUID(),
    title: data.title.trim(),
    description: data.description?.trim() ?? '',
    dueDate: data.dueDate,
    priority: data.priority ?? 'medium',
    status: 'pending',
    createdAt: new Date().toISOString(),
  }
}

export function compareTodos(a: Todo, b: Todo): number {
  if (a.status !== b.status) {
    return a.status === 'pending' ? -1 : 1
  }

  const dateDiff = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()

  if (dateDiff !== 0) {
    return dateDiff
  }

  const priorityOrder: Record<TodoPriority, number> = {
    high: 0,
    medium: 1,
    low: 2,
  }

  return priorityOrder[a.priority] - priorityOrder[b.priority]
}

export function sortTodos(todos: Todo[] = []): Todo[] {
  return [...todos].sort(compareTodos)
}

export function isExpired(todo: Todo): boolean {
  if (todo.status === 'completed') return false

  return new Date(todo.dueDate).getTime() < Date.now()
}

export function timeRemaining(date: string) {
  const now = Date.now()
  const target = new Date(date).getTime()

  const diff = target - now

  const expired = diff <= 0

  const total = Math.max(0, diff)

  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))

  const seconds = Math.floor((total % (1000 * 60)) / 1000)

  return {
    expired,
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}
