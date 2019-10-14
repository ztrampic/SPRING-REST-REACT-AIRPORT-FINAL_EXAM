import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const insertAirCompanyUser = async function (airportDTO) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.post('/api/airCompany/insertAirCompanyUser', airportDTO, { headers })
    return result
}

export default insertAirCompanyUser