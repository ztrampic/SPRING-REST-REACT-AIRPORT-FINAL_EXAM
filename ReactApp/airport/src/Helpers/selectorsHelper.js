import userSingUp from '../apiSelectors/UserSingUp';
import userLogin from '../apiSelectors/UserLogin';
import getToken from '../apiSelectors/GetToken';
import getAuthUser from '../apiSelectors/GetAuthUser'
import getAllAirportsAdmin from '../apiSelectors/airport/GetAllAirportsAdmin'
import updateAirportAdmin from '../apiSelectors/airport/UpdateAirportAdmin'
import deleteAirportAdmin from '../apiSelectors/airport/DeleteAirportAdmin'
import insertNewAirportAdmin from '../apiSelectors/airport/InsertNewAirportAdmin'

export default{
    userSingUp,
    userLogin,
    getToken,
    getAuthUser,
    getAllAirportsAdmin,
    updateAirportAdmin,
    deleteAirportAdmin,
    insertNewAirportAdmin,
}