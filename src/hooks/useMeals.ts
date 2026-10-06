import { useEffect, useState } from 'react'
import { fetchAllMeals } from '../api'
import type { Meal } from '../types'

export function useMeals() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    fetchAllMeals()
      .then((data) => {
        if (active) setMeals(data)
      })
      .catch(() => {
        if (active) setError('Could not load meals. Please check your connection and refresh.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  return { meals, loading, error }
}
