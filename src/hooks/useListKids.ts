import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { EnumQueryKeys } from "./shared";

export const useListKids = () => {
  return useQuery(
    [EnumQueryKeys.KIDS],
    async () => {
      const { data } = await apiClient.listKids()

      return data.data
    }
  )
}