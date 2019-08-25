import React from 'react';
import MojHeader from './Components/MojHeader';
import {
  BrowserRouter,
  Route,
} from "react-browser-router";
import AdminHomePage from './Admin/AdminHomePage';
import PretragaAerodromaPage from './User/PretragaAerodromaPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <MojHeader/>
          <Route path = "/admin" component={AdminHomePage}/>
          <Route path = "/aerodrom" component = {PretragaAerodromaPage}/>
        </div>
      </BrowserRouter>
    </div>
       
    
  );
}

export default App;
