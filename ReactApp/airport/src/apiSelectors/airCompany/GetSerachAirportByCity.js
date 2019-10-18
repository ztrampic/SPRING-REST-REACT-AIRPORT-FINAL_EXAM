import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const getSearchAirportByCity = async function (airportCityName) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.post('/api/airport/searchByCity', airportCityName , { headers })
    return result
}

export default getSearchAirportByCity