import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const deleteAirCpompanyUser = async function (ids) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }

    const result = await DataUtils.post('api/userAirport/deleteUserAirCompany/'+ids.idUser,ids.id, { headers })
    return result
}

export default deleteAirCpompanyUser