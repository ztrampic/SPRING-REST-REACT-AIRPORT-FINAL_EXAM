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
            <header style={{height:'150px'}} class="header">
                <div class="brand-box">
                     <a href="/" class="btn btn-white btn-animated">Home<span style={{marginLeft:'5px'}}></span>{this.state.time.toLocaleTimeString()}</a>
                </div>
                <div class="text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary-main">Like no other airport on earth.</span>
                        <span class="heading-primary-sub">Living ideas – connecting lives.</span>
                    </h1>
                    <a href="/admin" class="btn btn-white btn-animated">Temp Airport Admin</a>
                    <a href="/airCompanyAdmin" class="btn btn-white btn-animated">DTemp Aircompany Admin</a>
                    <a href="/loginForm" class="btn btn-white btn-animated">Login</a>
                    <a onClick={this.logout} href="/" class="btn btn-white btn-animated">Logout</a>
                </div>
            </header>
        )
    }
}

export default MojHeader;

