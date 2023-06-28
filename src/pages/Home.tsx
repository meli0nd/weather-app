import React, { useEffect, useState } from "react"
import Search from "../components/Search"
import WeatherInfo from "../components/WeatherInfo"
import ForecastInfo from "../components/ForecastInfo"
import { useLocation } from "../hooks/useLocation"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { fetchLocation } from "../services/fetchLocation"
import { fetchSearch } from "../services/fetchSearch"
import Loading from "../components/Loading"
import Header from "../components/Header"
import LoadingPage from "./LoadingPage"
import ErrorPage from "./ErrorPage"

const Home: React.FC = () => {
  // getting user's geolocation
  const { longitude, latitude } = useLocation()
  const [searchValue, setSetSearchValue] = useState("")
  // fetching data with geolocation (first render)
  const {
    data,
    isSuccess,
    refetch: refetchLocation,
  } = useQuery(["location"], () => fetchLocation(latitude, longitude))
  // fetching data with search value
  const { data: searchData } = useQuery(
    ["search"],
    () => searchValue && fetchSearch(searchValue)
  )

  // using react-query mutation for search function and refetch data
  const client = useQueryClient()
  const mutationSearch = useMutation({
    mutationFn: (value: string) => fetchSearch(value),
    onSuccess: () => client.fetchQuery("search"),
  })
  const onSearch = (str: string) => {
    if (!str) {
      return
    }
    mutationSearch.mutate(str)
  }

  const mutationLocation = useMutation({
    mutationFn: () => fetchLocation(latitude, longitude),
    onSuccess: () => client.fetchQuery("location"),
  })
  const onRefetch = () => {
    setSetSearchValue("")
    mutationLocation.mutate()
    mutationSearch.mutate("")
  }

  // looking for first default request
  useEffect(() => {
    if (data && longitude) {
      if (Math.ceil(data.location.lon) !== Math.ceil(longitude)) {
        refetchLocation()
      }
    }
  }, [data])

  // looking for search request data
  const weatherData = searchData ? searchData : data

  if (data && longitude) {
    if (Math.ceil(data.location.lon) !== Math.ceil(longitude)) {
      return (
        <LoadingPage
          searchValue={searchValue}
          setSetSearchValue={setSetSearchValue}
          onSearch={onSearch}
        />
      )
    }
  }

  if (searchData && searchData.code) {
    return (
      <ErrorPage
        refetchLocationData={onRefetch}
        error={true}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />
    )
  }

  return (
    <div className="w-full flex flex-col  items-center justify-start pt-7">
      <Header
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />

      {isSuccess && (
        <>
          <WeatherInfo {...weatherData} />
          <ForecastInfo {...weatherData} />
        </>
      )}
    </div>
  )
}

export default Home
