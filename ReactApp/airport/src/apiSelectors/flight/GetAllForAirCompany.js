import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper";
import DataUtils from "../../DataUtils";


export const getAllForAirCompany = async function (id) {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/airCompany/getAllFlights/'+id, { headers })
      return result
  }
  
  export default getAllForAirCompany