import React, { FC } from "react"
import ForecastItem from "./ForecastItem"
import { useHorizontalScroll } from "../hooks/useHorizontalScroll"

type TForecastInfo = {
  forecast: {
    forecastday: [
      {
        hour: [
          {
            condition: {
              text: string
              icon: string
            }
            time_epoch: string
            time: number
            temp_c: number
          }
        ]
      }
    ]
  }
  location: {
    localtime: string
  }
  showMore: boolean
  onShowMore: () => void
}

const ForecastInfo: FC<TForecastInfo> = ({
  forecast,
  location,
  showMore,
  onShowMore,
}) => {
  const info = forecast.forecastday[0].hour || ""
  const realTime = Array.from(location.localtime).slice(11, 13).join("")
  const scrollRef = useHorizontalScroll()

  return (
    <>
      {forecast && (
        <div
          className={`${
            showMore && "hidden"
          } w-full  flex overflow-x-auto overflow-y-hidden forecast-info pb-3`}
          ref={scrollRef}
        >
          {info.map((item, index) => (
            <ForecastItem
              {...item}
              index={index}
              key={item.time_epoch}
              realTime={realTime}
              onShowMore={onShowMore}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ForecastInfo
