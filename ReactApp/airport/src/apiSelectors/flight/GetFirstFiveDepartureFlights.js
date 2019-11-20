import DataUtils from "../../DataUtils";

export const getFirstFiveDepartureFlights = async function (data) {
      const user = JSON.parse(sessionStorage.getItem('userAirport'));
      if(user === null){
         return [];
      }else{
        const id = user.airportDTO.id
        const result = await DataUtils.post('/api/auth/getFirstFiveDepartureFlights/'+id, data)
        return result
      } 
      
  }
  
  export default getFirstFiveDepartureFlights;