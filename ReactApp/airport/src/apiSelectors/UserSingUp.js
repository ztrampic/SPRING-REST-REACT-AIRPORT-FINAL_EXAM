import DataUtils from "../DataUtils"


export const userSingUp = async function(data){
    const result = await DataUtils.post('/api/auth/singup',data)
    return result.data

}
export default userSingUp;
