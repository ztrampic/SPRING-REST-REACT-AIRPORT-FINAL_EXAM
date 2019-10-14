import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const searchAirCompanyByName = async function (name) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.post('/api/airCompany/searchByName', name, { headers })
    return result
}

export default searchAirCompanyByName