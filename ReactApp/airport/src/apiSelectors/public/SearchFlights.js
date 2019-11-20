import DataUtils from "../../DataUtils";

export const SearchFlights = async function (data) {
      const result = await DataUtils.post('/api/auth/searchFlights',data)
      return result
  }
  
  export default SearchFlights