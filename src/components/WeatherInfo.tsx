import { time } from "console"
import React, { FC } from "react"

type TWeatherInfo = {
  current: {
    temp_c: number
    condition: {
      icon: string
      text: string
    }
    wind_kph: number
  }
  location: {
    country: string
    name: string
    localtime: string
  }
  forecast: {
    forecastday: [
      {
        astro: {
          sunrise: string
          sunset: string
        }
        day: {
          maxtemp_c: number
          mintemp_c: number
          daily_chance_of_rain: number
        }
      }
    ]
  }
}

const WeatherInfo: FC<TWeatherInfo> = ({ location, current, forecast }) => {
  const timeProps: string = location.localtime
  const time: string = Array.from(timeProps).slice(11, 16).join("")
  const country: string = location.country
  const city: string = location.name
  const temp: number = Math.ceil(Number(current.temp_c))
  const wind: number = current.wind_kph
  const icon: string = current.condition.icon
  const weather: string = current.condition.text
  const maxTemp: number = forecast.forecastday[0].day.maxtemp_c
  const minTemp: number = forecast.forecastday[0].day.mintemp_c
  const rainChance: number = forecast.forecastday[0].day.daily_chance_of_rain
  const sunrise: string = forecast.forecastday[0].astro.sunrise
  const sunset: string = forecast.forecastday[0].astro.sunset
  const DATA_DAY = new Date().getDay()
  const monthIndex = new Date().getMonth()
  const dayToday = new Date().getDate()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  let day
  switch (DATA_DAY) {
    case 1:
      day = "Monday"
      break
    case 2:
      day = "Thursday"
      break
    case 3:
      day = "Wednesday"
      break
    case 4:
      day = "Tuesday"
      break
    case 5:
      day = "Frisday"
      break
    case 6:
      day = "Saturday"
      break
    case 7:
      day = "Sunday"
      break

    default:
      break
  }

  return (
    <div className="w-full flex flex-col  items-center justify-center px-[50px] mt-[15px]">
      <div className="flex">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center justify-center">
            <h1 className="text-[40px] font-bold text-white mr-[30px]">
              {city}, {country}
            </h1>
            <h2 className="text-[40px] text-white text-center font-bold">
              {time}
            </h2>
          </div>
          <h3 className="text-[38px] text-white uppercase">
            {day} {monthNames[monthIndex]} {dayToday}
          </h3>
        </div>
      </div>
      <div className="mb-[15px] flex flex-col items-center justify-center">
        <h1 className="text-[68px] font-bold text-white uppercase text-center">
          {temp}°C
        </h1>
        <div className="flex items-center">
          <img
            src={icon}
            alt="weather icon"
            className="animate-bounce mr-[20px]"
          />
          <h3 className="text-[38px] text-white uppercase">{weather}</h3>
        </div>
      </div>

      <div className="rounded-2xl right-side max-w-[50%] flex flex-col justify-center flex-wrap items-center text-center bg-gray-400 bg-opacity-40">
        <div className="w-full flex justify-between items-center text-center">
          <div className="w-[200px] flex flex-col items-center justify-center m-[30px]">
            <span className="text-2xl  text-white">
              <b>{maxTemp}°</b>
            </span>
            <span className="uppercase text-white text-xl">Max temp</span>
          </div>
          <div className="w-[200px] flex flex-col items-center justify-center m-[30px]">
            <span className="text-2xl  text-white">
              <b>{wind} km/h</b>
            </span>
            <span className="uppercase text-white text-xl">Wind</span>
          </div>
          <div className="w-[200px] flex flex-col items-center justify-center m-[30px]">
            <span className="text-2xl  text-white">
              <b>{sunrise}</b>
            </span>
            <span className="uppercase text-white text-xl">Sunrise</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center text-center">
          <div className="w-[200px] flex flex-col items-center justify-center m-[30px]">
            <span className="text-2xl  text-white">
              <b>{minTemp}°</b>
            </span>
            <span className="uppercase text-white text-xl">Min temp</span>
          </div>
          <div className="w-[200px] flex flex-col items-center justify-center m-[30px]">
            <span className="text-2xl  text-white">
              <b>{rainChance}%</b>
            </span>
            <span className="uppercase text-white text-xl">Rain</span>
          </div>
          <div className="w-[200px] flex flex-col items-center justify-center m-[30px]">
            <span className="text-2xl  text-white">
              <b>{sunset}</b>
            </span>
            <span className="uppercase text-white text-xl">Sunset</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
