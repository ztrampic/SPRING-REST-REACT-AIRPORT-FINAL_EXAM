import { getTokenFromSessionStorage } from '../../Helpers/AuthHelper'
import DataUtils from "../../DataUtils"


export const GetAllTicketTypes = async function () {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/ticket/getTicketTypes',{ headers })
      return result
  }
  
  export default GetAllTicketTypes;