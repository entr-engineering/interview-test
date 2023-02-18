import { useMemo } from "react";
import { ResponseItem } from "../apiClient";
import { useFilterAndSortParams } from "./useFilterAndSortParams";
import { useListAdults } from "./useListAdults"
import { useListKids } from "./useListKids";
import { useListSeniors } from "./useListSeniors";

export const useListAll = () => {
  const adultsQuery = useListAdults();
  const kidsQuery = useListKids();
  const seniorsQuery = useListSeniors();
  const { minAge, maxAge, ageSort = 'desc', nameSort = 'asc', nameSearch } = useFilterAndSortParams();

  const isLoading = adultsQuery.isLoading || kidsQuery.isLoading || seniorsQuery.isLoading
  const isSuccess = adultsQuery.isSuccess || kidsQuery.isSuccess || seniorsQuery.isSuccess
  const isError = adultsQuery.isError || kidsQuery.isError || seniorsQuery.isError

  const data = useMemo<ResponseItem[]>(() => {
    if (!isSuccess || isLoading) {
      return []
    }

    const allData = [
      ...(adultsQuery.data ?? []),
      ...(seniorsQuery.data ?? []),
      ...(kidsQuery.data ?? [])
    ]

    return allData
    .filter( item => (
      Boolean(minAge) ? item.age >= Number(minAge) : true) 
      && (Boolean(maxAge) ? item.age <= Number(maxAge) : true)
    )
    .filter( item => {
      const composite = `${item.name.firstName} ${item.name.lastName}`.toLowerCase()
      return composite.includes(nameSearch) 
    })
    .sort((a, b) => {
      const sortedName = nameSort === 'desc' 
        ?  `${b.name.firstName} ${b.name.lastName}`.localeCompare( `${a.name.firstName} ${a.name.lastName}`)
        :  `${a.name.firstName} ${a.name.lastName}`.localeCompare( `${b.name.firstName} ${b.name.lastName}`)
      
      const sortedAge = ageSort === 'desc'
        ? b.age - a.age
        : a.age - b.age
      
        return sortedName || sortedAge
    })
  }, [isLoading, isSuccess, adultsQuery, seniorsQuery, kidsQuery, minAge, maxAge, nameSort, ageSort, nameSearch])

  return {
    isLoading,
    isSuccess,
    isError,
    data
  }
}