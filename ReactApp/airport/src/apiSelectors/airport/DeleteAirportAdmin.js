import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"
import DataUtils from "../../DataUtils"


export const deleteAirportAdmin = async function (id) {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/airport/hardDeleteAirport/'+id,{ headers })
      return result
  }
  
  export default deleteAirportAdmin