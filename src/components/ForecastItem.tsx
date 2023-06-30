import React, { FC } from "react"

type TForecastItem = {
  time: number
  temp_c: number
  condition: {
    icon: string
  }
  realTime: string
  onShowMore: (index: number) => void
  index: number
}

const ForecastItem: FC<TForecastItem> = ({
  time: propsTime,
  temp_c,
  condition,
  realTime,
  onShowMore,
  index,
}) => {
  const sliceTimeProps = (propsType: number, from: number, to: number) => {
    return Array.from(propsType.toString()).splice(from, to).join("")
  }
  const temp = Math.ceil(temp_c)
  const data: string = sliceTimeProps(propsTime, 5, 5)
  const time: string = sliceTimeProps(propsTime, 11, 15)
  const propsHours: string = Array.from(propsTime.toString())
    .slice(11, 13)
    .join("")
  const icon = condition.icon

  const isActive = realTime === propsHours
  return (
    <div
      onClick={() => onShowMore(index)}
      className={`rounded-[20px] min-w-[150px] h-[175px] p-[20px] mt-[30px] mr-[15px] inline-flex justify-normal items-center flex-col bg-gray-400 bg-opacity-40 ${
        isActive && "forecast-active"
      }`}
    >
      <h1 className="text-white">{data}</h1>
      <h1 className="text-white">{time}</h1>
      <img src={icon} alt="" />
      <p className="font-bold text-[20px] text-white">{temp}°</p>
    </div>
  )
}

export default ForecastItem
