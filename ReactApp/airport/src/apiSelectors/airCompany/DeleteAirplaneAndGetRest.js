import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const deleteAirplaneAndGetRest = async function (id) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.get('/api/airplane/deleteAndGetRest/'+id, { headers })
    return result
}

export default deleteAirplaneAndGetRest