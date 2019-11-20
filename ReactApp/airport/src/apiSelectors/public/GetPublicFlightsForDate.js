import DataUtils from "../../DataUtils";

export const getPublicFlightsForDate = async function (date) {
      const user = JSON.parse(sessionStorage.getItem('userAirport')); 
      const id = user.airportDTO.id
      const result = await DataUtils.get('/api/auth/getAllPublicFlights/'+id+'/'+date)
      return result
  }
  
  export default getPublicFlightsForDate