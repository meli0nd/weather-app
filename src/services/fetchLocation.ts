import axios from "axios"

const baseURL = "https://api.weatherapi.com/v1/forecast.json"

export const fetchLocation = async (latitude?: number, longitude?: number) => {
  try {
    if (latitude && longitude) {
      const res = await axios.get(
        `${baseURL}?key=ec79ae10a11c45bdb1d115610232606&q=${latitude},${longitude}`
      )
      return res.data
    }
    const res_1 = await axios.get(
      `${baseURL}?key=ec79ae10a11c45bdb1d115610232606&q=London`
    )
    return res_1.data
  } catch (error) {
    alert("Server error")
    window.location.reload()
  }
}
