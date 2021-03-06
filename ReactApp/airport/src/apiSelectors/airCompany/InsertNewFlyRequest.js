import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const insertNewFlyRequest = async function (data) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.post('api/flightRequest/insertNewFR', data , { headers })
    return result
}

export default insertNewFlyRequest