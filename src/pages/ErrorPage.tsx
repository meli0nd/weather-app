import React, { FC } from "react"
import Header from "../components/Header"

type TError = {
  setSetSearchValue: any
  searchValue: string
  onSearch: (str: string) => void
  inputFocus?: boolean
  error?: boolean
  refetchLocationData: () => void
}

const ErrorPage: FC<TError> = ({
  searchValue,
  setSetSearchValue,
  onSearch,
  refetchLocationData,
}) => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-7">
      <Header
        error={true}
        searchValue={searchValue}
        setSetSearchValue={setSetSearchValue}
        onSearch={onSearch}
      />

      <div className="mt-[200px] text-white font-bold text-[70px] ">
        There is no such location on the server
      </div>

      <button
        className="text-red-500 shadow-cyan-300 px-14 py-3 font-bold bg-white shadow-md
        rounded-3xl mt-[200px] transition-all ease-out duration-300
        hover:bg-gray-300"
        onClick={refetchLocationData}
      >
        Go back
      </button>
      <div className="text-white mt-[50px] text-xl">
        <span>Or make another search request</span>
      </div>
    </div>
  )
}

export default ErrorPage
