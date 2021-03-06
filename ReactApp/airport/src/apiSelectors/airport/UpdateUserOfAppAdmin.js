import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"


export const updateUserOfAppAdmin = async function (userOfApplicationData) {
    const token = getTokenFromSessionStorage()
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
    const result = await DataUtils.put('/api/userAirport/updateUserOfApplicationData',userOfApplicationData,{ headers })
    return result
}

export default updateUserOfAppAdmin