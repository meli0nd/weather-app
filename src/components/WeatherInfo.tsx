import { time } from "console"
import React, { FC } from "react"

type TWeatherInfo = {
  forecastIndex?: number
  onHideMore: () => void
  onRefetch: () => void
  showMore: boolean
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
        hour: [
          {
            time: string
            temp_c: string
            feelslike_c: string
            humidity: string
            wind_kph: number
            wind_dir: string
            condition: {
              text: string
              icon: string
            }
          }
        ]
      }
    ]
  }
}

const WeatherInfo: FC<TWeatherInfo> = ({
  location,
  current,
  forecast,
  showMore,
  onRefetch,
  onHideMore,
  forecastIndex,
}) => {
  const forecastTimeString: any =
    forecastIndex && forecast.forecastday[0].hour[forecastIndex].time
  const forecastTime =
    forecastIndex && Array.from(forecastTimeString).slice(11, 16).join("")
  const feelsLike =
    forecastIndex && forecast.forecastday[0].hour[forecastIndex].feelslike_c
  const humidity =
    forecastIndex && forecast.forecastday[0].hour[forecastIndex].humidity
  const windDirection =
    forecastIndex && forecast.forecastday[0].hour[forecastIndex].wind_dir
  const timeProps: string = location.localtime
  const time: string = forecastIndex
    ? Array.from(forecastTimeString).slice(11, 16).join("")
    : Array.from(timeProps).slice(11, 16).join("")
  const country: string = location.country
  const city: string = location.name
  const temp: number = Math.ceil(
    forecastIndex
      ? Number(forecast.forecastday[0].hour[forecastIndex].temp_c)
      : Number(current.temp_c)
  )
  const wind: number = forecastIndex
    ? forecast.forecastday[0].hour[forecastIndex].wind_kph
    : current.wind_kph
  const icon: string = forecastIndex
    ? forecast.forecastday[0].hour[forecastIndex].condition.icon
    : current.condition.icon
  const weather: string = forecastIndex
    ? forecast.forecastday[0].hour[forecastIndex].condition.text
    : current.condition.text
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
      day = "Friday"
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

  const weatherActive =
    "!flex-row bg-gray-500 rounded-2xl bg-opacity-50 py-[20px] mt-[100px]"
  const weatherLeftSide = "mr-[50px]"
  const weatherFullInfo = "h-[500px]"

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div
        className={`w-full flex flex-col  duration-300  items-center justify-around px-[50px] mt-[15px] ${
          showMore && weatherActive
        }`}
      >
        <div className="mr-[100px]">
          <div className="flex weather-left-side">
            <div className="flex flex-col items-center justify-end">
              <div className="flex items-center justify-center weather-left-side">
                <h1 className="text-[40px] font-bold text-white mr-[30px]">
                  {city}, {country}
                </h1>
                <h2 className={`text-[40px] text-white text-center font-bold`}>
                  {time}
                </h2>
              </div>
              <h3 className="text-[38px] text-white uppercase">
                {day} {monthNames[monthIndex]} {dayToday}
              </h3>
            </div>
          </div>
          <div
            className={`mb-[15px] flex flex-col items-center justify-center ${
              showMore && weatherLeftSide
            }`}
          >
            <h1 className="text-[68px] font-bold text-white uppercase text-center">
              {temp}°C
            </h1>
            <div className={`flex items-center ${showMore && weatherLeftSide}`}>
              <img
                src={icon}
                alt="weather icon"
                className={`${
                  weather === "Sunny" && time[0] !== "2"
                    ? "animate-spin"
                    : "animate-bounce"
                }  mr-[20px] ${showMore && "w-[100px]"}`}
              />
              <h3 className="text-[38px] text-white uppercase">{weather}</h3>
            </div>
          </div>
        </div>
        <div
          className={`rounded-2xl relative right-side max-w-[50%] flex flex-col justify-center flex-wrap items-center text-center bg-gray-400 bg-opacity-40 ${
            showMore && weatherFullInfo
          }`}
        >
          {/* верх */}
          <div className="w-full flex flex-wrap justify-between items-center text-center ">
            <div className="w-[200px] flex  items-center justify-center m-[30px]">
              <img
                src="img/temp-max.svg"
                alt="temp max"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{maxTemp}°</b>
                </span>{" "}
                <span className="uppercase text-white text-xl">Max temp</span>
              </div>
            </div>
            <div className="w-[200px] flex  items-center justify-center m-[30px]">
              <img
                src="img/winddir-icon.svg"
                alt="wind"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{wind} km/h</b>
                </span>
                <span className="uppercase text-white text-xl">Wind</span>
              </div>
            </div>
            <div className="w-[200px] flex  items-center justify-center m-[30px]">
              <img
                src="img/sunrise-icon.svg"
                alt="sunrise"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{sunrise}</b>
                </span>
                <span className="uppercase text-white text-xl">Sunrise</span>
              </div>
            </div>
          </div>
          {/* center */}
          <div className="w-full flex justify-between items-center text-center">
            <div className="w-[200px] flex items-center justify-center m-[30px]">
              <img
                src="img/temp-min.svg"
                alt="temp min"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{minTemp}°</b>
                </span>
                <span className="uppercase text-white text-xl">Min temp</span>
              </div>
            </div>
            <div className="w-[200px] flex items-center justify-center m-[30px]">
              <img
                src="img/temp-min.svg"
                alt="rain"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{rainChance}%</b>
                </span>
                <span className="uppercase text-white text-xl">Rain</span>
              </div>
            </div>
            <div className="w-[200px] flex  items-center justify-center m-[30px]">
              <img
                src="img/sunset-icon.svg"
                alt="sunset"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{sunset}</b>
                </span>
                <span className="uppercase text-white text-xl">Sunset</span>
              </div>
            </div>
          </div>
          {/* низ */}
          <div
            className={`${
              showMore && "!flex justify-between items-center "
            } w-full hidden text-center`}
          >
            <div className="w-[200px] flex items-center justify-center m-[30px]">
              <img
                src="img/feelslike-icon.svg"
                alt="feels like"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{feelsLike}°</b>
                </span>
                <span className="uppercase text-white text-xl">Feels like</span>
              </div>
            </div>
            <div className="w-[200px] flex items-center justify-center m-[30px]">
              <img
                src="img/wind-icon.svg"
                alt="wind dir"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{windDirection}</b>
                </span>
                <span className="uppercase text-white text-xl">Wind Dir</span>
              </div>
            </div>
            <div className="w-[200px] flex items-center justify-center m-[30px]">
              <img
                src="img/humidity-icon.svg"
                alt="humidity"
                className={`${showMore && "w-[30px] !block"} mr-[15px] hidden`}
              />
              <div className="flex flex-col">
                <span className="text-2xl  text-white">
                  <b>{humidity}%</b>
                </span>
                <span className="uppercase text-white text-xl">Humidity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* кнопки */}
      <div
        className={`${
          !showMore && "hidden"
        } flex justify-center items-center mt-[50px]`}
      >
        <button
          onClick={onRefetch}
          className="mr-[50px] uppercase px-14 py-3 font-bold bg-white shadow-lg
          rounded-3xl transition-all ease-out duration-300
          hover:bg-gray-300"
        >
          Your location
        </button>
        <button
          onClick={onHideMore}
          className="uppercase px-14 py-3 font-bold bg-white shadow-lg
          rounded-3xl transition-all ease-out duration-300
          hover:bg-gray-300"
        >
          Hide full info
        </button>
      </div>
    </div>
  )
}

export default WeatherInfo
