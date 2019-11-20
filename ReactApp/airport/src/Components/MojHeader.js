import React, { Component } from 'react'
import { logOut } from '../Helpers/AuthHelper';
import '../Css/Header.css'



export class MojHeader extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
        this.logout = this.logout.bind(this)
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    UNSAFE_componentWillMount() {
        setInterval(() => this.currentTime(), 1000)
    }
    logout() {
        logOut();

    }
    render() {
        return (
            <header style={{height:'150px'}} className="header">
                <div className="brand-box">
                     <a href="/" className="btn btn-white btn-animated">Home<span style={{marginLeft:'5px'}}></span>{this.state.time.toLocaleTimeString()}</a>
                     <a href="/flights" className="btn btn-white btn-animated">Temp Search All</a> 
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Like no other airport on earth.</span>
                        <span className="heading-primary-sub">Living ideas – connecting lives.</span>
                    </h1>
                    <a href="/admin" className="btn btn-white btn-animated">Temp Airport Admin</a>
                    <a href="/airCompanyAdmin" className="btn btn-white btn-animated">DTemp Aircompany Admin</a>
                    <a href="/loginForm" className="btn btn-white btn-animated">Login</a>
                    <a onClick={this.logout} href="/" className="btn btn-white btn-animated">Logout</a>
                </div>
            </header>
        )
    }
}

export default MojHeader;

