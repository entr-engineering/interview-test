import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../apiClient"
import { EnumQueryKeys } from "./shared"

export const  useListAdults = () => {
  return useQuery(
    [EnumQueryKeys.ADULTS],
    async () => {
      const { data } = await apiClient.listAdults()

      return data.data
    }
  )
}