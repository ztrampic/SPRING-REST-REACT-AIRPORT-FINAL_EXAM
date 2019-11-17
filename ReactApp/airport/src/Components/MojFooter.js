import React, { Component } from 'react'
import { select } from '../Helpers/DataUtilsHelper';
import '../Css/Footer.css'
import { Icon, GridRow, GridColumn, Label } from 'semantic-ui-react';

export class MojFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiveArrivals: [],
            fiveDepartures: [],
            userAirportData: {
                airport: {},
                companyName: undefined,
                description: undefined,
                phoneNumber: undefined,
                contact: undefined,
            },
        }
    }
    componentDidMount() {
        this.getUserAirportData();
    }
    getUserAirportData() {
        const idUserAirport = 1;
        select('getUserOfAppInfo', idUserAirport)
            .then(res => {
                let userAirportDataApi = res;
                sessionStorage.setItem('userAirport', JSON.stringify(userAirportDataApi));
                this.setState({ userAirportData: userAirportDataApi });
            })
    }

    render() {
        return (
            <div>
                <footer className="page-footer font-small unique-color-dark" style={{ borderBottomStyle: 'solid', borderBottomColor: '#6351ce' }}>
                    <div className="header" style={{ height: "198px", marginBottom: '-14px', marginTop: '-14px' }}>
                        <GridRow style={{position:'flex',marginLeft:"43%"}}>
                                    <a style={{marginTop:"5px"}} href="http://www.facebook.com" className="btn btn-white btn-animated"><Icon size='big' name='facebook'></Icon></a>
                                    <a style={{marginTop:"5px"}} href='http://www.twitter.com' className="btn btn-white btn-animated"><Icon size='big' name='twitter'></Icon></a>
                                    <a style={{marginTop:"5px"}} href='http://www.linkedin.com' className="btn btn-white btn-animated"><Icon size='big' name='linkedin'></Icon></a>
                                    <a style={{marginTop:"5px"}} href='http://www.instagram.com' className="btn btn-white btn-animated"><Icon size='big' name='instagram'></Icon></a>
                        </GridRow>
                        <GridRow>
                            <GridColumn style={{width:'50%'}}>
                                <Label style={{backgroundColor:'transparent',fontSize:'18px',marginLeft:'5rem',fontFamily:'fantasy'}}>{this.state.userAirportData.companyName}</Label>
                                    <p style={{marginLeft:'6rem',color:'white'}}>{this.state.userAirportData.description}</p>
                            </GridColumn>
                            <GridColumn style={{width:'50%',textAlign:'-webkit-center'}}>
                            <Label style={{backgroundColor:'transparent', fontSize:'18px',fontFamily:'fantasy'}}>Contact</Label>
                                    <p style={{marginLeft:'1rem',color:'white'}}><span style={{marginRight:"5px",fontFamily:'fantasy',color:'black'}}>Adress:</span>{this.state.userAirportData.contact}</p>
                                    <p style={{marginLeft:'1rem',color:'white'}}><span style={{marginRight:"5px",fontFamily:'fantasy',color:'black'}}>Tel:</span>{this.state.userAirportData.phoneNumber}</p>
                            </GridColumn>
                        </GridRow>
                        <GridRow style={{textAlign:'-webkit-center',position:'absolute',bottom:'0',left:"45%"}}>
                        <span style={{marginRight:"5px",fontFamily:'fantasy'}}>© 2019 Copyright:</span> 
                             <a style={{color:'white'}} href="https://github.com/ztrampic"> https://github.com/ztrampic</a>
                        </GridRow>
                    </div>
                </footer>
            </div>
        )
    }
}

export default MojFooter;

                // <div className="row mt-3" style = {{width:'100%',height:'100%'}}>
                //         <div className="col-md-6 col-lg-7 text-center text-md-right">
                //                 <div>
                //                     <a href="http://www.facebook.com" className="btn btn-white btn-animated"><Icon name='facebook'></Icon></a>
                //                     <a href='http://www.twitter.com' className="btn btn-white btn-animated"><Icon name='twitter'></Icon></a>
                //                     <a href='http://www.linkedin.com' className="btn btn-white btn-animated"><Icon name='linkedin'></Icon></a>
                //                     <a href='http://www.instagram.com' className="btn btn-white btn-animated"><Icon name='instagram'></Icon></a>
                //                 </div>
                //             </div>
                //             <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                //                 <h6 className="text-uppercase font-weight-bold">{this.state.userAirportData.companyName}</h6>
                //                 <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                //                 <p>{this.state.userAirportData.description}</p>
                //             </div>
                //             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                //                 <h6 className="text-uppercase font-weight-bold">Contact</h6>
                //                 <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                //                 <p>
                //                     <i className="fas fa-home mr-3"></i>{this.state.userAirportData.contact}</p>
                //                 <p>
                //                     <i className="fas fa-print mr-3"></i>{this.state.userAirportData.phoneNumber}</p>

                //             </div>

                //             <div className="footer-copyright text-center py-3">© 2019 Copyright:
                //         <a href="https://github.com/ztrampic"> https://github.com/ztrampic</a>
                //             </div>
                //             <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{textAlign: 'center'}}>
                //                 <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                //                 <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                //                 <p>
                //                     <a  href="#!">Your Account</a>
                //                 </p>
                //                 <p>
                //                     <a href="#!">Help</a>
                //                 </p>
                //                 <p>
                //                     <a href="#!">Useful Links</a>
                //                 </p>
                //             </div>
                //         </div>