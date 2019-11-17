import { getTokenFromSessionStorage } from '../../Helpers/AuthHelper'
import DataUtils from "../../DataUtils"


export const AddNewTicketValue = async function (data) {
      const token = getTokenFromSessionStorage()
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
      const result = await DataUtils.post('/api/ticket/addNewTicketValue',data,{ headers })
      return result
  }
  
  export default AddNewTicketValue;