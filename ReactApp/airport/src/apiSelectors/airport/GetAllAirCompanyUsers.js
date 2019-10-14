import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"
import DataUtils from "../../DataUtils"


export const getAllAirCompanyUsers = async function (id) {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/userAirport/getAllUserAirCompany/'+id,{ headers })
      return result
  }
  
  export default getAllAirCompanyUsers