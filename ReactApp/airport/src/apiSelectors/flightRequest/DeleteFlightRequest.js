import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const deleteFlightRequest = async function (id) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.del('/api/flightRequest/delete/'+id, { headers })
    return result
}

export default deleteFlightRequest