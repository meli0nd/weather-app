import React from "react"
import ForecastItem from "./ForecastItem"

const ForecastInfo = (props: any) => {
  const info = props.forecast.forecastday[0].hour || ""
  return (
    <>
      {props.forecast && (
        <div className="w-full flex flex-nowrap overflow-x-auto">
          {info.map((item: any) => (
            <ForecastItem {...item} key={item.time_epoch} />
          ))}
        </div>
      )}
    </>
  )
}

export default ForecastInfo
