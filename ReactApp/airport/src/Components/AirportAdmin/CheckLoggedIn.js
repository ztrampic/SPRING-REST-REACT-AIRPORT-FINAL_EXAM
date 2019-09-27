import { checkIsAuth } from "../../Helpers/AuthHelper";
import AdminHomePage from "../../Admin/AdminHomePage";
import { Redirect, Route } from "react-browser-router";
import React, { Component } from 'react'
import PretragaAerodromaPage from "../../User/PretragaAerodromaPage";

export default class CheckLoggedIn extends Component {

    render() {
        const logeddIn = checkIsAuth();
        if (logeddIn) {
            return <Route path="/admin" component={AdminRouter}/>
          } else {
             return <Redirect to="/" />
          }
    }
    
}

const AdminRouter = ({ match }) => (
    <div>
        <Route exact path={match.url} component={AdminHomePage} />
        <Route exact path={`${match.url}/aerodrom`} component={PretragaAerodromaPage} />
    </div>
       );

