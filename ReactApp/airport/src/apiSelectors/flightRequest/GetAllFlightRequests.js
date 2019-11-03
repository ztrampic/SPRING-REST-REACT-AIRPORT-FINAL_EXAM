import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const getAllFlightRequests = async function () {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/flightRequest/getAll', { headers })
    return result
}

export default getAllFlightRequests