import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const getDeclinedFlightRequests = async function () {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/flightRequest/getAllDeclined', { headers })
    return result
}

export default getDeclinedFlightRequests