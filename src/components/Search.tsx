import { FC, useEffect } from "react"
import { TSearch } from "./Header"

const Search: FC<TSearch> = ({
  searchValue,
  setSetSearchValue,
  onSearch,
  error,
  showBackButton,
  onRefetch,
}) => {
  useEffect(() => {}, [error])

  const redOutline =
    error && "border-2 border-red-500 shadow-red-500 text-red-500"

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <input
        type="search"
        className={` ${redOutline} duration-300  transition-all outline-none w-[50%] px-7 py-3 rounded-3xl text-1xl font-bold mb-[20px] shadow-lg `}
        placeholder="New York..."
        value={searchValue}
        onChange={(e) => setSetSearchValue(e.target.value)}
      />
      <div>
        <button
          className={`${redOutline} duration-100 transition-all px-7 py-3 bg-white shadow-lg  rounded-3xl disabled:bg-gray-400 disabled:opacity-25 hover:bg-gray-300`}
          onClick={() => {
            onSearch(searchValue)
          }}
        >
          Search
        </button>
        <button
          className={`${redOutline} ${
            !showBackButton && "hidden"
          } ml-[50px] duration-100 transition-all px-7 py-3 bg-white shadow-lg  rounded-3xl disabled:bg-gray-400 disabled:opacity-25 hover:bg-gray-300`}
          onClick={onRefetch}
        >
          To your location
        </button>
      </div>
    </div>
  )
}

export default Search
