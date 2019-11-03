
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper";
import DataUtils from "../../DataUtils";


export const getAllForDate = async function (date) {
      const token = getTokenFromSessionStorage()
      const user = JSON.parse(sessionStorage.getItem('userAirport')); 
      const id = user.airportDTO.id
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/flights/getAllForDate/'+id+'/'+date, { headers })
      return result
  }
  
  export default getAllForDate