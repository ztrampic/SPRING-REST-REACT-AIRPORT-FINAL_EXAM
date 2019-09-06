import React from 'react';
import HomePage from './HomePage';
import MojHeader from './Components/MojHeader';
import {
  BrowserRouter,
  Route,
} from "react-browser-router";
import AdminHomePage from './Admin/AdminHomePage';
import PretragaAerodromaPage from './User/PretragaAerodromaPage';
import MojFooter from './Components/MojFooter';
import AirCompanyAdminPage from './Admin/AirCompanyAdminPage';



function App() {

  return (
    <div>
      <div className='mojHeader'>
        <MojHeader />
      </div>
      <div className='Body'>
        <BrowserRouter  >
          <Route path="/admin" component={AdminHomePage} />
          <Route path="/aerodrom" component={PretragaAerodromaPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/airCompanyAdmin" component = {AirCompanyAdminPage}/>
        </BrowserRouter>
      </div>
      <div className='mojFooter'>
        <MojFooter
        />
      </div>
    </div>
  );
}

export default App;
