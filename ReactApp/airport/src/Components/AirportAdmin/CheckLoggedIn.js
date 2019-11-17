import { checkIsAuth } from "../../Helpers/AuthHelper";
import AdminHomePage from "../../Admin/AdminHomePage";
import { Redirect, Route } from "react-browser-router";
import React, { Component } from 'react'
import AirCompanyAdminPage from "../../Admin/AirCompanyAdminPage";

export default class CheckLoggedIn extends Component {

    render() {
        const logeddIn = checkIsAuth();   
        if (logeddIn) {
            const user = JSON.parse(sessionStorage.getItem('user'));    
                switch(user.roleSet[0].roleName){
                    case 'ROLE_ADMIN':
                     return  <Route path="/admin" component={AdminRouter}/>;
                    case 'ROLE_ADMIN_AIRCOMPANY':
                     return  <Route path="/airCompanyAdmin" component={AdminAircompanyRouter}/>;
                    default:
                        return null 
                } 
          } else {
             return <Redirect to="/" />
          }
    }
    
}

const AdminRouter = ({ match }) => (
    <div>
        <Route exact path={match.url} component={AdminHomePage} />
    </div>
       );
const AdminAircompanyRouter = ({ match }) => (
<div>
    <Route exact path={match.url} component={AirCompanyAdminPage} />
</div>
    ); 
        

