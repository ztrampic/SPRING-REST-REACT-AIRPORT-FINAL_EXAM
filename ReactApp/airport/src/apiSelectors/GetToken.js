import DataUtils from "../DataUtils"

export const getToken = async function (inputData, options) {

    const headers = {
      'Authorization': DataUtils.clientAuthentication,
      'Content-Type': 'application/x-www-form-urlencoded' //+ md5(authString)
    }  
    const data = await DataUtils.post('/api/auth/login', inputData)
    return data.data
  }
  
  export default getToken