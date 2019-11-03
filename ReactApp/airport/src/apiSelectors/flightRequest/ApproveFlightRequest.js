import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const ApproveFlightRequest = async function (id) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/flightRequest/approve/'+id, { headers })
    return result
}

export default ApproveFlightRequest