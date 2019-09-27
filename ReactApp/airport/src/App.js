import React from 'react';
import HomePage from './HomePage';
import MojHeader from './Components/MojHeader';
import {
  BrowserRouter,
  Route,
} from "react-browser-router";
import MojFooter from './Components/MojFooter';
import AirCompanyAdminPage from './Admin/AirCompanyAdminPage';
import LoginForm from './LoginForm';
import SingUpForm from './SingUpForm';
import CheckLoggedIn from './Components/AirportAdmin/CheckLoggedIn';



function App() {
    return (
      <div>
        <div className='mojHeader'>
          <MojHeader />
        </div>
        <div className='Body' style={{marginTop:'1rem'}}>
          <BrowserRouter  >
            <Route path="/" component={PublicRouter} />
            <Route path="/admin" component={CheckLoggedIn} />
            <Route path="/airCompanyAdmin" component = {AdminAircompanyRouter}/>
          </BrowserRouter>
        </div>
        <div className='mojFooter'>
          <MojFooter
          />
        </div>
      </div>
    );
}

const PublicRouter = ({ match }) => (
  <div>
    <Route exact path={match.url} component={HomePage} />
    <Route exact={true} path="/singUpForm" component={SingUpForm} />
    <Route exact={true} path="/loginForm" component={LoginForm} />
  </div>
   );
const AdminAircompanyRouter = ({ match }) => (
  <div>
      <Route exact path={match.url} component={AirCompanyAdminPage} />
  </div>
      );     

export default App;
