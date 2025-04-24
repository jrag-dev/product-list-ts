import { useEffect, useState } from "react"
import { IDessert } from "../lib/types.definitions.ts";



export function useDesserts() {
  const [desserts, setDesserts] = useState<IDessert[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDesserts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('./api/data.json')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setDesserts(json)
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ha ocurrido un error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDesserts()
  }, [])

  return {
    desserts,
    isLoading,
    error
  }
}