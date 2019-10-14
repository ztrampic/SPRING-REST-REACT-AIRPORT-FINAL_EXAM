import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const addUserAirCompanyAdminAccount = async function (data) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.post('/api/airCompany/insertAdminAccount/'+data.idAir, data.user, { headers })
    return result
}

export default addUserAirCompanyAdminAccount