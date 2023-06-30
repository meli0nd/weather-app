import React, { FC } from "react"
import Header from "../components/Header"
import WeatherInfoSkeleton from "../components/WeatherInfoSkeleton"

type TLoading = {
  setSetSearchValue: any
  searchValue: string
  onSearch: (str: string) => void
  showBackButton: boolean
  onRefetch: () => void
}

const LoadingPage: FC<TLoading> = ({
  searchValue,
  setSetSearchValue,
  onSearch,
  showBackButton,
  onRefetch,
}) => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-7">
      <Header
        onRefetch={onRefetch}
        showBackButton={showBackButton}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />

      <WeatherInfoSkeleton />
    </div>
  )
}

export default LoadingPage
