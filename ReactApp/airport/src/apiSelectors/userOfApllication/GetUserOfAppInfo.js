import DataUtils from '../../DataUtils'

export const GetUserOfAppInfo = async function (id) {
    const data = await DataUtils.get('/api/auth/getUserOfApplication/'+id)
    return data.data
  }
  
  export default GetUserOfAppInfo