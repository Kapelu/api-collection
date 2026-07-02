// hooks/useLocalStorage.ts

'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): {
  value: T
  setValue: Dispatch<SetStateAction<T>>
  remove: () => void
  isLoaded: boolean
} {
  const [value, setValue] = useState<T>(initialValue)
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar desde localStorage
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item !== null) {
        setValue(JSON.parse(item) as T)
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
      }
    } catch (error) {
      console.error(`Error leyendo "${key}" del localStorage`, error)
      setValue(initialValue)
    } finally {
      setIsLoaded(true)
    }
  }, [key, initialValue])

  // Guardar automáticamente cada vez que cambia el estado
  useEffect(() => {
    if (!isLoaded) return

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error guardando "${key}" en localStorage`, error)
    }
  }, [key, value, isLoaded])

  function remove() {
    try {
      window.localStorage.removeItem(key)
      setValue(initialValue)
    } catch (error) {
      console.error(`Error eliminando "${key}" del localStorage`, error)
    }
  }

  return {
    value,
    setValue,
    remove,
    isLoaded,
  }
}
