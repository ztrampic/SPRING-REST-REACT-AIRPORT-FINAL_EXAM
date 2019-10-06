import React, { Component } from 'react'
import { Input, Form, Label, Segment, SegmentGroup, Button, Select } from 'semantic-ui-react'
import { select } from '../Helpers/DataUtilsHelper'
import AirportTabsStaffTable from './AirportAdmin/AirportTabsStaffTable'

export default class AddUserCard extends Component {
        constructor(props){
            super(props)
            this.state = {
                roles:[],
            }
            this.getAllRoles = this.getAllRoles.bind(this)
        }

    componentDidMount(){
        this.getAllRoles()
    }    

    getAllRoles(){
    select('getAllRoles')
      .then(res => {
        let apiRoles = res;   
        this.setState({ roles: apiRoles });       
      })
    }

    render() {
        const employees = [
            { key: 'af', value: 'af', text: 'Afghanistan' },
           
          ]
        return (
            <SegmentGroup horizontal>
             <Segment style={{width:'40%',backgroundColor:'aliceblue'}}>   
            <Form>
            <div style = {{display:'grid'}}>
                <Select style={{marginTop:'1rem',marginBottom:'1rem'}} placeholder='Select Employee' options={employees} />
                <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Firstname</Label>
                <Input required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Lastname</Label>
                <Input required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                <Label type="Email" size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Email</Label>
                <Input required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Phone number</Label>
                <Input required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Username</Label>
                <Input required focus size={"mini"} style={{marginBottom:'1rem'}}></Input>
                <Label size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Password</Label>
                <Input required type="Password" focus size={"mini"}  style={{marginBottom:'1rem'}}></Input>
                <Button size={"mini"} style={{backgroundColor:'#21ba45',color:'white'}}>Insert</Button>
            </div>
            </Form>
            </Segment>
            <Segment style={{width:'60%'}}>
                 <AirportTabsStaffTable></AirportTabsStaffTable>
            </Segment>
            </SegmentGroup>
        )
    }
}
