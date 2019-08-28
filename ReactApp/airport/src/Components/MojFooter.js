import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

export class MojFooter extends Component {

    
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
                                    <Button circular color='facebook' icon='facebook' href='/admin' />
                                    <Button circular color='twitter' icon='twitter' />
                                    <Button circular color='linkedin' icon='linkedin' />
                                    <Button circular color='google plus' icon='google plus' />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center text-md-left mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Company name</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipisicing elit.</p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                                <p>
                                    <a href="#!">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#!">Help</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                                <p>
                                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p>
                                    <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

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
