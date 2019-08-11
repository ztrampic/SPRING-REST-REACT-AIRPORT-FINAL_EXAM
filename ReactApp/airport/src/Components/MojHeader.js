import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../Css/navbar.css';

export class MojHeader extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto"> <img src="https://fontmeme.com/permalink/190811/1aba789026f70db5b744433a31fa8f9a.png"></img></NavbarBrand>
                   
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/pocetna">Pocetna</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/admin">Admin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/registracija">Registracija</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/aerodrom">Aerodromi</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MojHeader
