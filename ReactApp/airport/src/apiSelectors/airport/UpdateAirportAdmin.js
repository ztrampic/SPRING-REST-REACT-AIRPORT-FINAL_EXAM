import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"
import DataUtils from "../../DataUtils"


export const updateAirportAdmin = async function (airportForUpdate) {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.put('/api/airport/updateAirport', airportForUpdate, { headers })
      return result
  }
  
  export default updateAirportAdmin