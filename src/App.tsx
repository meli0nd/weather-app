import React, { FC } from "react"
import Home from "./pages/Home"
import "./App.css"

const App: FC = () => {
  return (
    <div className=" px-[40px] w-full h-screen flex bg-cover bg-[url('https://catherineasquithgallery.com/uploads/posts/2021-03/1614719486_145-p-foni-dlya-artov-187.jpg')]">
      <Home />
    </div>
  )
}

export default App
