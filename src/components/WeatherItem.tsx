import React, { FC } from "react"

type TWeatherItem = {
  showMore: boolean
  condition: string
  conditionText: string
  image: string
}

const WeatherItem: FC<TWeatherItem> = ({
  showMore,
  condition,
  conditionText,
  image,
}) => {
  debugger
  return (
    <div className="w-30% flex flex-wrap justify-between items-center text-center ">
      <div className="w-[200px] flex  items-center justify-center m-[30px]">
        <img
          src={image}
          alt="..."
          className={`${showMore && "w-[50px] !block"} mr-[15px] hidden`}
        />
        <div className="flex flex-col">
          <span className="text-2xl  text-white">
            <b>{condition}</b>
          </span>{" "}
          <span className="uppercase text-white text-xl">{conditionText}</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherItem
