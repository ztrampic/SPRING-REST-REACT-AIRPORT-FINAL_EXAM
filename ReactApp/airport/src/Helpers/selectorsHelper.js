import userSingUp from '../apiSelectors/UserSingUp';
import userLogin from '../apiSelectors/UserLogin';
import getToken from '../apiSelectors/GetToken';
import getAuthUser from '../apiSelectors/GetAuthUser'
import getAllAirportsAdmin from '../apiSelectors/airport/GetAllAirportsAdmin'
import updateAirportAdmin from '../apiSelectors/airport/UpdateAirportAdmin'
import deleteAirportAdmin from '../apiSelectors/airport/DeleteAirportAdmin'
import insertNewAirportAdmin from '../apiSelectors/airport/InsertNewAirportAdmin'
import getUserOfAppInfo from '../apiSelectors/userOfApllication/GetUserOfAppInfo'
import getUserOfAppInfoAdmin from '../apiSelectors/airport/GetUserOfAppInfoAdmin'
import updateUserOfAppAdmin from '../apiSelectors/airport/UpdateUserOfAppAdmin'
import setFirstTimeUserOfApp from '../apiSelectors/airport/SetFirstTimeUserOfApp'
import getAllRoles from '../apiSelectors/roles/GetAllRoles'

export default{
    userSingUp,
    userLogin,
    getToken,
    getAuthUser,
    getAllAirportsAdmin,
    updateAirportAdmin,
    deleteAirportAdmin,
    insertNewAirportAdmin,
    getUserOfAppInfo,
    getUserOfAppInfoAdmin,
    updateUserOfAppAdmin,
    setFirstTimeUserOfApp,
    getAllRoles,
}