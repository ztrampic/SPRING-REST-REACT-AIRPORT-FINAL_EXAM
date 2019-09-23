import DataUtils from "../DataUtils"
  
  export const userLogin = async function (inputData, options) {
  
    const headers = {
      'Authorization': DataUtils.clientAuthentication,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  
    const urlEncodedData = `grant_type=password&username=${inputData.username}&password=${inputData.password}`
  
    const data = await DataUtils.post('/api/auth/login', urlEncodedData, { headers })
    return data
  }
  
  export default userLogin