import React, { FC } from "react"

const WeatherInfoSkeleton: FC = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center px-[50px] mt-[15px] absolute top-[173px] animate-pulse">
      <div className="flex">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center justify-center">
            <span className="w-[500px] h-[60px] bg-gray-400 rounded-3xl"></span>
          </div>
          <span className="w-[500px] h-[37px] bg-gray-400 rounded-3xl inline-block mt-[10px] mb-[10px]"></span>
        </div>
      </div>
      <div className="mb-[15px] flex flex-col items-center justify-center">
        <span className="w-[200px] h-[70px] bg-gray-400 rounded-3xl inline-block mt-[15px] mb-[17px]"></span>
        <div className="flex items-center">
          <span className="w-[875px] h-[40px] bg-gray-400 rounded-3xl inline-block mt-[13px] mb-[10px]"></span>
        </div>
      </div>
      <div className="rounded-2xl right-side max-w-[50%] flex flex-col justify-center flex-wrap items-center text-center  mb-[30px]">
        <span className="w-[780px] h-[240px] bg-gray-400 rounded-3xl inline-block"></span>
      </div>
      <div className=" rounded-2xl right-side w-full flex flex-col justify-center flex-wrap items-center text-center">
        <span className="w-[1600px] h-[175px] bg-gray-400 rounded-3xl inline-block"></span>
      </div>
    </div>
  )
}

export default WeatherInfoSkeleton
