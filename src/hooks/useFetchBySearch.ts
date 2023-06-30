import { QueryClient, useMutation, useQuery } from "react-query"
import { fetchSearch } from "../services/fetchSearch"

export const useFetchBySearch = (client: QueryClient, searchValue: string) => {
  const { data: searchData, isLoading: isFetchingSearch } = useQuery(
    ["search"],
    () => searchValue && fetchSearch(searchValue)
  )

  const mutationSearch = useMutation({
    mutationFn: (value: string) => fetchSearch(value),
    onSuccess: () => client.fetchQuery("search"),
  })
  return { searchData, isFetchingSearch, mutationSearch }
}
