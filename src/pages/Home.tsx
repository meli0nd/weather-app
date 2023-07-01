import React, { useEffect, useState } from "react"
import { useLocation } from "../hooks/useLocation"
import { useQueryClient } from "react-query"
import LoadingPage from "./LoadingPage"
import ErrorPage from "./ErrorPage"
import { useFetchByLocation } from "../hooks/useFetchByLocation"
import { useFetchBySearch } from "../hooks/useFetchBySearch"
import MainPage from "./MainPage"

const Home: React.FC = () => {
  const client = useQueryClient()
  const { longitude, latitude } = useLocation()
  const [searchValue, setSetSearchValue] = useState("")
  const [forecastIndex, setForecastIndex] = useState<number | null>(null)
  const {
    data,
    isSuccess,
    refetchLocation,
    isFetchingLocation,
    mutationLocation,
  } = useFetchByLocation(client, longitude, latitude)
  const [showMore, setShowMore] = useState<boolean>(false)

  const { searchData, isFetchingSearch, mutationSearch } = useFetchBySearch(
    client,
    searchValue
  )
  const onSearch = (str: string) => {
    if (!str) {
      return
    }
    if (showMore) {
      setShowMore(!showMore)
    }
    mutationSearch.mutate(str)
  }

  const onShowMore = (index: number) => {
    setForecastIndex(index)
    setShowMore(true)
  }

  const onHideMore = () => {
    setForecastIndex(null)
    setShowMore(false)
  }

  const onRefetch = () => {
    if (showMore) {
      setShowMore(false)
    }
    setForecastIndex(null)
    setSetSearchValue("")
    mutationLocation.mutate()
    mutationSearch.mutate("")
  }

  useEffect(() => {
    if (data && longitude) {
      if (Math.ceil(data.location.lon) !== Math.ceil(longitude)) {
        refetchLocation()
      }
    }
  }, [data])

  const weatherData = searchData ? searchData : data
  const showBackButton = searchData ? true : false

  document.body.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      onSearch(searchValue)
    }
  })

  if (data && longitude) {
    if (
      Math.ceil(data.location.lon) !== Math.ceil(longitude) ||
      isFetchingLocation ||
      isFetchingSearch
    ) {
      return (
        <LoadingPage
          onRefetch={onRefetch}
          showBackButton={showBackButton}
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
        onRefetch={onRefetch}
        showBackButton={showBackButton}
        refetchLocationData={onRefetch}
        error={true}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />
    )
  }

  if (isSuccess) {
    return (
      <MainPage
        weatherData={weatherData}
        forecastIndex={forecastIndex}
        {...weatherData}
        showMore={showMore}
        onRefetch={onRefetch}
        onHideMore={onHideMore}
        onShowMore={onShowMore}
        showBackButton={showBackButton}
        refetchLocationData={onRefetch}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />
    )
  }
  return <></>
}

export default Home
