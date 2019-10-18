import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const insertNewFlyRequest = async function (dateForRequest) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.post('api/airCompany', dateForRequest , { headers })
    return result
}

export default insertNewFlyRequest