import DataUtils from "../../DataUtils"
import { getTokenFromSessionStorage } from "../../Helpers/AuthHelper"

export const checkAvailableTermin = async function (date) {
    const token = getTokenFromSessionStorage()
    const airport = JSON.parse(sessionStorage.getItem('userAircompanyInfo'));
    const id = airport.airportList[0].id;
    const headers = {
      'Authorization': token,
      'Content-Type': 'application/json'
    }

    const result = await DataUtils.get('api/flights/checkAvailableTermin/'+id+'/'+date, { headers })
    return result
}

export default checkAvailableTermin