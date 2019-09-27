import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"
import DataUtils from "../../DataUtils"


export const getAllAirportsAdmin = async function () {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/airport/getAllAirports',{ headers })
      return result
  }
  
  export default getAllAirportsAdmin