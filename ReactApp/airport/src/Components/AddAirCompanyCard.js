import React, { Component } from 'react'
import { Input, Form, Label, Segment, SegmentGroup, Button } from 'semantic-ui-react'
import AirportAdminSearchAirlines from './AirportAdmin/AirportAdminSearchAirlines'
import Axios from 'axios'

export default class AddAirCompanyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResultAirCompanys: [],
        }
        this.searchAirCompanyByName = this.searchAirCompanyByName.bind(this)
    }
searchAirCompanyByName(){
    const airCompanyName = document.getElementById('airCompanyName').value;  
    Axios.post('http://localhost:8080/api/aircompany/searchByName', airCompanyName)
    .then(res => {
      const apiAirCompanys = res.data;
      this.setState({searchResultAirCompanys:apiAirCompanys})  
    })
}

    render() {
        const { searchResultAirCompanys } = this.state;

        return (
            <SegmentGroup horizontal>
                <Segment style={{ width: '40%', backgroundColor: 'aliceblue', display: 'grid' }}>
                    <Label style={{ position: 'absolute', width: '100%', textAlign: 'center' }}>New Aircompany</Label>
                    <Form style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'grid' }}>
                            <Label size={"mini"} style={{ color: 'white', backgroundColor: '#2185d0' }}>Aircompany Name</Label>
                            <Input required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label size={"mini"} style={{ color: 'white', backgroundColor: '#2185d0' }}>Pib</Label>
                            <Input required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Button size={"mini"} style={{ backgroundColor: '#21ba45', color: 'white' }}>Insert</Button>
                        </div>
                    </Form>
                </Segment>
                <Segment style={{width:'60%',backgroundColor:'aliceblue', display:'grid'}}>
                    <Label style={{position:'absolute',width:'100%',textAlign:'center'}}>New Aircompany Admin</Label>
                    <Form onSubmit={this.searchAirCompanyByName} style={{margin:'auto',marginTop:'1rem',display:'flex',flexDirection:'row-reverse'}}>
                        <Input
                            id='airCompanyName'
                            minLength={4}
                            required
                            icon={{ name: 'search', circular: true }}
                            placeholder='Search...'
                        />
                        <Button style={{ marginLeft: '1rem' }}>Search</Button>
                    </Form>
                    <AirportAdminSearchAirlines
                        searchResultAirCompanys = {searchResultAirCompanys}
                        />
                </Segment>
                {/* <Segment style={{width:'60%',backgroundColor:'aliceblue', display:'grid'}}>
                    <Label style={{position:'absolute',width:'100%',textAlign:'center'}}>New Aircompany Admin</Label>
            <Form style={{margin:'auto',marginTop:'1rem',display:'flex',flexDirection:'row-reverse'}}>
                <div style = {{display:'grid'}}>
                    <Label type="Email" size={"mini"} style={{color:'white',backgroundColor:'#2185d0'}}>Firstname</Label>
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
                    <Button size={"mini"} style={{backgroundColor:'#21ba45',color:'white'}}>Add Admin</Button>
                </div>      
            </Form>
            </Segment> */}
            </SegmentGroup>
        )
    }
}
