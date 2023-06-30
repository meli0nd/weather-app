import React, { FC } from "react"
import Header from "../components/Header"
import WeatherInfo from "../components/WeatherInfo"
import ForecastInfo from "../components/ForecastInfo"

type TMainPage = {
  searchValue: string
  setSetSearchValue: (str: string) => void
  refetchLocationData: () => void
  onSearch: (str: string) => void
  showBackButton: boolean
  showMore: boolean
  onShowMore: () => void
  onRefetch: () => void
  forecastIndex?: number
  onHideMore: () => void
  weatherData: any
}

const MainPage: FC<TMainPage> = ({
  searchValue,
  setSetSearchValue,
  onSearch,
  showBackButton,
  showMore,
  onShowMore,
  onHideMore,
  forecastIndex,
  onRefetch,
  weatherData,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-7">
      <Header
        onRefetch={onRefetch}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
        showBackButton={showBackButton}
      />

      <WeatherInfo
        forecastIndex={forecastIndex}
        {...weatherData}
        showMore={showMore}
        onRefetch={onRefetch}
        onHideMore={onHideMore}
        showBackButton={showBackButton}
      />
      <ForecastInfo
        {...weatherData}
        onShowMore={onShowMore}
        showMore={showMore}
        showBackButton={showBackButton}
      />
    </div>
  )
}

export default MainPage
