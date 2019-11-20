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
import searchAirCompanyByName from '../apiSelectors/airCompany/SearchAirCompanyByName'
import insertAirCompanyUser from '../apiSelectors/airport/InsertAirCompanyUser'
import getAllAirCompanyUsers from '../apiSelectors/airport/GetAllAirCompanyUsers'
import deleteAirCompanyUser from '../apiSelectors/airport/DeleteAirCompanyUser'
import addUserAirCompanyAdminAccount from '../apiSelectors/airport/AddUserAirCompanyAdminAccount'
import getAirCompanyInfo from '../apiSelectors/airCompany/GetAirCompanyInfo'
import insertNewAirplane from '../apiSelectors/airCompany/InsertNewAirplane'
import getAllAirplanes from '../apiSelectors/airCompany/GetAllAirplanes'
import insertNewFlyRequest from '../apiSelectors/airCompany/InsertNewFlyRequest'
import getSearchAirportByCity from '../apiSelectors/airCompany/GetSerachAirportByCity'
import getAllFlightRequests from '../apiSelectors/flightRequest/GetAllFlightRequests'
import getApprovedFlightRequests from '../apiSelectors/flightRequest/GetApprovedFlightRequests'
import getDeclinedFlightRequests from '../apiSelectors/flightRequest/GetDeclinedFlightRequests'
import getPendingFlightRequests from '../apiSelectors/flightRequest/GetPendingFlightRequests'
import checkAvailableTermin from '../apiSelectors/airport/CheckAvailableTermin'
import deleteAirplaneAndGetRest from '../apiSelectors/airCompany/DeleteAirplaneAndGetRest'
import getAllForDate from '../apiSelectors/flight/GetAllForDate'
import insertNewFlight from '../apiSelectors/flight/InserNewFlight'
import approveFlightRequest from '../apiSelectors/flightRequest/ApproveFlightRequest'
import deleteFlightRequest from '../apiSelectors/flightRequest/DeleteFlightRequest'
import declineFlightRequest from '../apiSelectors/flightRequest/DeclineFlightRequest'
import getAllForAirCompany from '../apiSelectors/flight/GetAllForAirCompany'
import getAllTicketTypes from '../apiSelectors/tickets/GetAllTicketTypes'
import addNewTicketValue from '../apiSelectors/tickets/AddNewTicketValue'
import getAllTicketValues from '../apiSelectors/tickets/GetAllTicketValues'
import getFirstFiveDepartureFlights from '../apiSelectors/flight/GetFirstFiveDepartureFlights'
import getPublicFlightsForDate from '../apiSelectors/public/GetPublicFlightsForDate'
import searchFlights from '../apiSelectors/public/SearchFlights'

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
    searchAirCompanyByName,
    insertAirCompanyUser,
    getAllAirCompanyUsers,
    deleteAirCompanyUser,
    addUserAirCompanyAdminAccount,
    getAirCompanyInfo,
    insertNewAirplane,
    getAllAirplanes,
    insertNewFlyRequest,
    getSearchAirportByCity,
    getAllFlightRequests,
    getApprovedFlightRequests,
    getDeclinedFlightRequests,
    getPendingFlightRequests,
    checkAvailableTermin,
    deleteAirplaneAndGetRest,
    getAllForDate,
    insertNewFlight,
    approveFlightRequest,
    deleteFlightRequest,
    declineFlightRequest,
    getAllForAirCompany,
    getAllTicketTypes,
    addNewTicketValue,
    getAllTicketValues,
    getFirstFiveDepartureFlights,
    getPublicFlightsForDate,
    searchFlights,
}