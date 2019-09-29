import { getTokenFromSessionStorage } from '../../Helpers/AuthHelper'
import DataUtils from "../../DataUtils"


export const getAllRoles = async function () {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.get('/api/role/getAll',{ headers })
      return result
  }
  
  export default getAllRoles