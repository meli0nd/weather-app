import React, { FC } from "react"
import Search from "./Search"

export type TSearch = {
  setSetSearchValue: any
  searchValue: string
  onSearch: (str: string) => void
  inputFocus?: boolean
  error?: boolean
  showBackButton: boolean
  onRefetch: () => void
}

const Header: FC<TSearch> = ({
  searchValue,
  setSetSearchValue,
  onSearch,
  error,
  showBackButton,
  onRefetch,
}) => {
  return (
    <div className="w-full flex flex-col justify-ceter items-center">
      <h1 className="text-center font-bold uppercase text-2xl absolute top-5 left-5 text-white">
        Weather App
      </h1>
      <span className="text-white mb-[5px] inline-block">
        Please don't forget to give permission to your location for full app
        abilities
      </span>
      <Search
        onRefetch={onRefetch}
        showBackButton={showBackButton}
        error={error}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />
    </div>
  )
}

export default Header
