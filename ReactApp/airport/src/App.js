import React from 'react';
import HomePage from './HomePage';
import MojHeader from './Components/MojHeader';
import {
  BrowserRouter,
  Route,
} from "react-browser-router";
import MojFooter from './Components/MojFooter';
import LoginForm from './LoginForm';
import SingUpForm from './SingUpForm';
import CheckLoggedIn from './Components/AirportAdmin/CheckLoggedIn';
import FlightsPage from './User/FlightsPage';



function App() {
    return (
      <div>
        <div className='mojHeader'>
          <MojHeader />
        </div>
        <div className='Body'>
          <BrowserRouter  >
            <Route path="/" component={PublicRouter} />
            <Route path="/admin" component={CheckLoggedIn} />
            <Route path="/airCompanyAdmin" component = {CheckLoggedIn}/>
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
    <Route exact={true} path="/flights" component={FlightsPage} />
  </div>
   );    

export default App;
