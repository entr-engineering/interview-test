import { useCallback, useEffect } from "react"

export const useFilterAndSortParams = () => {
  const searchParams = new URLSearchParams(document.location.search)
  const minAge = searchParams.get('minAge')
  const maxAge = searchParams.get('maxAge')
  const ageSort = searchParams.get('ageSort')
  const nameSort = searchParams.get('nameSort')
  const nameSearch = searchParams.get('name')

  const paramSetter = useCallback((name: string, value?: string) => {
    if (value) {
      searchParams.set(name, value) 
    } else {
      searchParams.delete(name)
    }

    window.location.search = searchParams.toString()
  }, [searchParams])
  
  useEffect(() => {
    if (!ageSort) {
      paramSetter('ageSort', 'asc')
    }
    if (!nameSort) {
      paramSetter('nameSort', 'desc')
    }
  }, [paramSetter, ageSort, nameSort])

  return {
    minAge: minAge ?? undefined,
    maxAge: maxAge ?? undefined,
    ageSort,
    nameSort,
    nameSearch: nameSearch ?? '',
    setMinAge: (age?: string) => paramSetter('minAge', age),
    setMaxAge:(age?: string) => paramSetter('maxAge', age),
    setAgeSort: (direction: 'asc' | 'desc') => paramSetter('ageSort', direction),
    setNameSort: (direction: 'asc' | 'desc') => paramSetter('nameSort', direction),
    setNameSearch: (name?: string) => paramSetter('name', name)
  }
}