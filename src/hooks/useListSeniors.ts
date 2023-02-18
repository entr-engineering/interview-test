import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../apiClient";
import { EnumQueryKeys } from "./shared";

export const useListSeniors = () => {
  return useQuery(
    [EnumQueryKeys.SENIORS],
    async () => {
      const { data } = await apiClient.listSeniors()

      return data
    }
  )
}