import { useState, useEffect } from "react"

type TPosition = {
  coords: {
    longitude: number
    latitude: number
  }
  timestamp: number
}

type TLocation = {
  latitude: number
  longitude: number
}

export const useLocation = () => {
  const [position, setPosition] = useState<TLocation>()
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    const onChange = (position: TPosition) => {
      const latitude: number = position.coords.latitude
      const longitude: number = position.coords.longitude
      setPosition({ latitude, longitude })
    }

    navigator.geolocation.getCurrentPosition(onChange)
  }, [])

  return { ...position, success }
}
