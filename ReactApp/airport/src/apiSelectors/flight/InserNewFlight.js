
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper";
import DataUtils from "../../DataUtils";


export const insertNewFlight = async function (data) {
      const token = getTokenFromSessionStorage()
      console.log("DAtA FOR FLIGHT",data);
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
  const result = await DataUtils.post('/api/flights/insertNewFlight',data, { headers })
      return result
  }
  
  export default insertNewFlight