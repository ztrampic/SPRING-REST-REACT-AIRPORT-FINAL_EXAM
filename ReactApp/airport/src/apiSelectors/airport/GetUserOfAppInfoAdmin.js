import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const getUserOfAppInfoAdmin = async function (id) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/userAirport/getUserOfApplication/'+id,{ headers })
    return result
}

export default getUserOfAppInfoAdmin