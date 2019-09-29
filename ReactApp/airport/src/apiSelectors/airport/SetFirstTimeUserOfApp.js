import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"
import DataUtils from "../../DataUtils"


export const setFirstTimeUserOfApp = async function (userOfApplicationData) {
      const token = getTokenFromSessionStorage()
      console.log("STA",token);
      console.log(token);
      
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.post('/api/userAirport/firstTimeUserOfApplication', userOfApplicationData, { headers })
      return result
  }
  
  export default setFirstTimeUserOfApp