import React, { Component } from 'react'
import { Form, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import { select } from '../../Helpers/DataUtilsHelper';

class ModalAddAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.insertAdminAccount = this.insertAdminAccount.bind(this)
        this.validation = this.validation.bind(this)
    }

    componentDidMount() {
    }
    validation(user) {
        if (user.name != '' && user.lastname != '' && user.email != '' && user.username != '' && user.phonenumber != '' && user.password != '') {
            return true
        } else {
            return false
        }
    }

    insertAdminAccount(id) {
        const name = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const password = document.getElementById('password').value;
        const user = { name, lastname, email, username, phonenumber, password }
        const data = { id, user }
        const val = this.validation(user)
        if (val === true) {
            select('addUserAirCompanyAdminAccount', data)
                .then(res => {
                    const response = res.status;
                    if (response === 200) {
                        this.props.closeAdminModal()
                    }
                })
        } else {
            alert("FILL ALL FIELDS")
        }
    }

    render() {
        const airCompanyId = this.props.idAircompanyForAddAdmin;
        return (
            <div>
                <Modal isOpen={this.props.open} style={{ marginTop: '21rem' }}>
                    <ModalHeader>Insert Admin Account</ModalHeader>
                    <ModalBody>
                        <Form style={{ display: 'table', margin: 'auto' }}>
                            <Label bsSize={"mini"} style={{ color: 'white', backgroundColor: '#2185d0', width: '100%' }}>Firstname</Label>
                            <Input id='firstname' required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label bsSize={"mini"} style={{ color: 'white', backgroundColor: '#2185d0', width: '100%' }}>Lastname</Label>
                            <Input id='lastname' required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label bsSize={"mini"} style={{ color: 'white', backgroundColor: '#2185d0', width: '100%' }}>Email</Label>
                            <Input id='email' required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label bsSize={"mini"} style={{ color: 'white', backgroundColor: '#2185d0', width: '100%' }}>Phone number</Label>
                            <Input id='phonenumber' required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label bsSize={"mini"} style={{ color: 'white', backgroundColor: '#2185d0', width: '100%' }}>Username</Label>
                            <Input id='username' required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label bsSize={"mini"} style={{ color: 'white', backgroundColor: '#2185d0', width: '100%' }}>Password</Label>
                            <Input id='password' required type="password" focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Button
                                style={{backgroundColor:'rgb(33, 186, 69)',color:'white'}}
                                onClick={() => this.insertAdminAccount(airCompanyId)}
                                type="Button">Add Admin Account</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{color:'white',backgroundColor:'red'}} onClick={this.props.closeAdminModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}


export default ModalAddAdmin