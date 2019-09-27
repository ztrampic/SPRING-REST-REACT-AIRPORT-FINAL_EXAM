import DataUtils from "../DataUtils"

export const getToken = async function (inputData) {
    const data = await DataUtils.post('/api/auth/login', inputData)
    return data.data
  }
  
  export default getToken