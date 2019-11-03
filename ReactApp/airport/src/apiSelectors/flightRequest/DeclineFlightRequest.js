import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const declineFlightRequest = async function (id) {
    const token = getTokenFromSessionStorage()
    console.log("SELECTOR",id);
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/flightRequest/declineFlightRequest/'+id, { headers })
    return result
}

export default declineFlightRequest