import axios from "axios"
const baseURL = "https://api.weatherapi.com/v1/forecast.json"

export const fetchSearch = async (value: string) => {
  try {
    const res = await axios.get(
      `${baseURL}?key=ec79ae10a11c45bdb1d115610232606&q=${value}`
    )
    return res.data
  } catch (error) {
    return error
  }
}
