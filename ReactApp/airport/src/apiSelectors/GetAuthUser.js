import { getTokenFromSessionStorage } from "../Helpers/AuthHelper"
import DataUtils from "../DataUtils";


export const getAuthUser = async function(userDTO, options) {
    const token = getTokenFromSessionStorage()
    console.log(":TOKEN",token);   
    const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const data = await DataUtils.post('/api/user/getUser', userDTO, { headers })
    return data.data
}

export default getAuthUser