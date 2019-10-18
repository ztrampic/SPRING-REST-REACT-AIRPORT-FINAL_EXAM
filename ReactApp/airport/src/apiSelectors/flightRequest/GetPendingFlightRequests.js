import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const getPendingFlightRequests = async function () {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/flightRequest/getAllPennding', { headers })
    return result
}

export default getPendingFlightRequests