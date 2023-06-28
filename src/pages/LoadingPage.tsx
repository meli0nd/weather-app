import React, { FC } from "react"
import Header from "../components/Header"

type TLoading = {
  setSetSearchValue: any
  searchValue: string
  onSearch: (str: string) => void
  inputFocus?: boolean
}

const LoadingPage: FC<TLoading> = ({
  searchValue,
  setSetSearchValue,
  onSearch,
}) => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-7">
      <Header
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />

      <div className="mt-[150px] text-white font-bold text-[70px] ">
        Loading...
      </div>
    </div>
  )
}

export default LoadingPage
