import { QueryClient, useMutation, useQuery } from "react-query"
import { fetchLocation } from "../services/fetchLocation"

export const useFetchByLocation = (
  client: QueryClient,
  longitude?: number,
  latitude?: number
) => {
  const {
    data,
    isSuccess,
    refetch: refetchLocation,
    isLoading: isFetchingLocation,
  } = useQuery(["location"], () => fetchLocation(latitude, longitude))
  const mutationLocation = useMutation({
    mutationFn: () => fetchLocation(latitude, longitude),
    onSuccess: () => client.fetchQuery("location"),
  })

  return {
    mutationLocation,
    data,
    isSuccess,
    refetchLocation,
    isFetchingLocation,
  }
}
