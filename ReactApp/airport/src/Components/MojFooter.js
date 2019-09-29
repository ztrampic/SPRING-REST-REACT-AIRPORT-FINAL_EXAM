import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react';
import { select } from '../Helpers/DataUtilsHelper';

export class MojFooter extends Component {
    constructor(props){
        super(props);
        this.state = {
            fiveArrivals:[],
            fiveDepartures:[],
            userAirportData:{
                airport:{},
                companyName:undefined,
                description:undefined,
                phoneNumber:undefined,
                contact:undefined,
            },
        }
    }
componentDidMount() {
    this.getUserAirportData();
}
getUserAirportData(){
    const  idUserAirport = 1;
  select('getUserOfAppInfo',idUserAirport)
      .then(res => {
        let userAirportDataApi = res;
        this.setState({ userAirportData: userAirportDataApi });       
      })
   }      
    
    render() {
        return (
            <div>
                <footer className="page-footer font-small unique-color-dark" style={{borderBottomStyle:'solid', borderBottomColor:'#6351ce'}}>
                    <div style={{backgroundColor: '#6351ce'}}>
                        <div className="container">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0">Get connected with us on social networks!</h6>
                                </div>
                                <div className="col-md-6 col-lg-7 text-center text-md-right">
                                <div>
                                    <Button circular color='facebook' icon='facebook' href='http://www.facebook.com' />
                                    <Button circular color='twitter' icon='twitter' href='http://www.twitter.com' />
                                    <Button circular color='youtube' icon='youtube' href='http://www.youtube.com'/>
                                    <Button circular color='linkedin' icon='linkedin' href='http://www.linkedin.com' />
                                    <Button circular color='instagram' icon='instagram' href='http://www.instagram.com'/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center text-md-left mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">{this.state.userAirportData.companyName}</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                                <p>{this.state.userAirportData.description}</p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{textAlign: 'center'}}>
                                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                                <p>
                                    <a  href="#!">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!">Help</a>
                                </p>
                                <p>
                                    <a href="#!">Useful Links</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                                <p>
                                    <i className="fas fa-home mr-3"></i>{this.state.userAirportData.contact}</p>
                                <p>
                                    <i className="fas fa-print mr-3"></i>{this.state.userAirportData.phoneNumber}</p>

                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://github.com/ztrampic"> https://github.com/ztrampic</a>
                    </div>
                </footer>      
            </div>
        )
    }
}

export default MojFooter;
