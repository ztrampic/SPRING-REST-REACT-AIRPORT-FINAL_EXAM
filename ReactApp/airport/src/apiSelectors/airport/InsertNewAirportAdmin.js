import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"
import DataUtils from "../../DataUtils"


export const insertNewAirportAdmin = async function (newAirport) {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.post('api/airport/airportEntry', newAirport, { headers })
      return result
  }
  
  export default insertNewAirportAdmin