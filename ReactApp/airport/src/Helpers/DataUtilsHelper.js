import Selectors from './selectorsHelper'
import { createBrowserHistory } from 'history';
import { checkIfTokenExpire, getRefreshTokenFromSessionStorage, logOut } from './AuthHelper';
import moment from 'moment'

export const select = async function(id,data,defValue){
    if(Selectors[id] === undefined){
        return defValue || ""
       
    }
    return await Selectors[id].call(this,data)
}
export const tokenValidation = async () => {
    const tokenExpire = checkIfTokenExpire();
    const history = createBrowserHistory()
    try {
      if (tokenExpire) {
        console.log('expire')
        const refreshToken = getRefreshTokenFromSessionStorage();
        const response = await select('getRefreshToken', refreshToken)
        if (response.status === 200) {
          const { expires_in } = response.data;
          const expireDate = moment().add(expires_in, 's')
          sessionStorage.setItem('token', JSON.stringify({ ...response.data, expires_in: expireDate }))
          return true
        }
      }
      if (!tokenExpire) {
        return true
      }
    } catch (e) {
      logOut(() => {
        history.push('/')
        window.location.reload();
      })
      console.log('ERROR', e.toString())
    }
  }

export default {select,tokenValidation}