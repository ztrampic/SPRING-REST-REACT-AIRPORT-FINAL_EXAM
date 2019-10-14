import React, { Component } from 'react'
import {  Form, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import { select } from '../../Helpers/DataUtilsHelper';

class ModalAddAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.insertAdminAccount = this.insertAdminAccount.bind(this)
    }

    componentDidMount() {  
    }

    insertAdminAccount=(id)=>{
        const name1 = document.getElementById('firstname').value;
        const lastname1 = document.getElementById('lastname').value;
        const email1 = document.getElementById('email').value;
        const username1 = document.getElementById('username').value;
        const phonenumber1 = document.getElementById('phonenumber').value;
        const password1 = document.getElementById('password').value;
        const user1={name:name1,lastname:lastname1,email:email1,username:username1,phonenumber:phonenumber1,password:password1}
        const data = {idAir:id,user:user1}
        select('addUserAirCompanyAdminAccount',data)
        .then(res=>{
            const apiInsert = res;
            console.log(res);
            
        })
    }
 
    render() {
        const airCompanyId = this.props.idAircompanyForAddAdmin;
        return (
            <div>
                <Modal isOpen={this.props.open} style={{marginTop:'21rem'}}>
                    <ModalHeader>Insert Admin Account</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={()=>this.insertAdminAccount(airCompanyId)} style={{display:'table',margin:'auto'}}>
                    <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0',width:'100%'}}>Firstname</Label>
                    <Input id='firstname' required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                    <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0',width:'100%'}}>Lastname</Label>
                    <Input id='lastname' required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                    <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0',width:'100%'}}>Email</Label>
                    <Input id='email' required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                    <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0',width:'100%'}}>Phone number</Label>
                    <Input id='phonenumber' required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                    <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0',width:'100%'}}>Username</Label>
                    <Input id='username' required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                    <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0',width:'100%'}}>Password</Label>
                    <Input id='password' required type="password" focus size={"mini"}  style={{marginBottom:'1rem'}}></Input>
                    <Button>Insert New Airport</Button>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={()=>this.props.closeAdminModal()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}


export default ModalAddAdmin
