import React, { Component } from 'react'
import { Grid, Segment, Label, Form, TextArea, Input, FormGroup, Button} from 'semantic-ui-react';

import axios from 'axios';
import ModalInsertAirports from '../Components/AirportAdmin/ModalInsertAirport';
import AirportTabs from '../Components/AirportAdmin/AirportTabs';
import { select } from '../Helpers/DataUtilsHelper';




export class AdminHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //samo u ovom slucaju: kada imam jenog korisnika aplikacije z vise treba napraviti logovanje
      airports: [],
      airport: {
        id:'',
        city:'',
        code:'',
        country:'',
        name:'',
        lat:'',
        long:'',
        direct_flights:'',
        carriers:''
      },
      userOfApplicationData:{
        id:'',
        airportDTO:{},
        description:'',
        phoneNumber:'',
        contact:'',
        companyName:''
      },
      isLoggedIn:false,
    }
    this.getDataFromFormUserAirport = this.getDataFromFormUserAirport.bind(this)
    this.updateAirports = this.updateAirports.bind(this)
    this.iniEntryOfApplicationUser = this.iniEntryOfApplicationUser.bind(this)
  }

  componentDidMount() {
    this.getAllAirports();
    this.getUserAirportData();
    
    
  }
  getUserAirportData(){
    const  idUserAirport = 1;
    axios.get('http://localhost:8080/api/userAirport/getUserOfApplication/'+idUserAirport)
      .then(res => {
        let userAirportDataApi = res.data;   
        //airports =_.sortBy(airports,'name')
        this.setState({ userOfApplicationData : userAirportDataApi });      
        this.setUserOfApplicationButtonDisabled();
      })   
   } 

  handleSelectChange = (event) => {
    const airports  = this.state.airports;
    const airportId = event.target.value;
    let aerodrom = airports.find(a => a.id === airportId);
    this.setState({
      airport: aerodrom
      
    })
  }

  setUserOfApplicationButtonDisabled(){
    const {userOfApplicationData} = this.state;
    if(userOfApplicationData.id === ""){
      document.getElementById('firstTime').disabled = false;
    }else{
      document.getElementById('firstTime').disabled = true;
    }
  }

  getAllAirports(){
    select('getAllAirportsAdmin')
        .then(res => {
          let airports = res.data;
          //airports =_.sortBy(airports,'name')
          this.setState({ airports });
        })
    }

    
  updateAirports(airports,airport){
    this.setState({airports:airports, airport:airport})
  }

  // updateApplicationUserAirport(){
   
  //   axios.put('http://localhost:8080/api/userAirport/updateUserOfApplicationData', userOfApplicationData)
  //     .then(res => {
  //       let airports = res.data;
  //       //airports =_.sortBy(airports,'name')
  //       this.setState({ airports });
  //     })
  // }
  getDataFromFormUserAirport(){
    let description = document.getElementById('description').value;
    let phoneNumber = document.getElementById('tel').value;
    let contact = document.getElementById('adress').value;
    let companyName = document.getElementById('companyName').value;
    let userOfApplicationData = {
        id:1,
        airportDTO:{},
        description,
        phoneNumber,
        contact,
        companyName
    }
    axios.put('http://localhost:8080/api/userAirport/updateUserOfApplicationData', userOfApplicationData)
        .then(res => {
          let apiUserOfApplicationData = res.data;
          this.setState({userOfApplicationData:apiUserOfApplicationData})
          window.location.reload();
          
          
    })       
  }
  
  iniEntryOfApplicationUser(){
    const{airport}=this.state;
    const airportDTO = airport;
    if(airportDTO.id === ''){
      alert('PICK AIRPORT FROM DROPDOWN')
    }else{
      let userOfApplicationData = {
        id:'',
        airportDTO,
        description:'',
        phoneNumber:'',
        contact:'',
        companyName:''
    }
      console.log('SETOVANJE',userOfApplicationData);
      
      axios.post('http://localhost:8080/api/userAirport/firstTimeUserOfApplication', userOfApplicationData)
      .then(res=>{
        let apiUserAirport = res.data;
      })
    }
  }

   
  render() {
    const {airports,airport} = this.state;

    return (
      <div>
        <div>
          <h1>AdminHomePage {}</h1>
        </div>
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column style={{width:'70%'}}>
              <Segment>
                <AirportTabs></AirportTabs>   
              </Segment>
            </Grid.Column>
            <Grid.Column  style={{width:'30%'}}>
              <Segment.Group vertical>
                <Segment style={{display:'grid', backgroundColor:'red'}}>
                  <Label style={{backgroundColor:'rgb(33, 133, 208)',color:'white'}}>Only First time choose airport from Dropdown and set it</Label>
                  <Button id='firstTime' onClick={this.iniEntryOfApplicationUser}  style={{marginTop:'1rem', backgroundColor:'aquamarine'}}>Set first time User of Application</Button>  
                </Segment>
                <Segment style={{backgroundColor:'aliceblue'}}>
                  <Label style={{marginBottom: '1rem', width:'100%', backgroundColor:'rgb(33, 133, 208)', color:'white'}}>Select Airport from DropBox</Label>
                      {airports? <select onChange={this.handleSelectChange} style={{marginBottom:'2rem',width:'100%'}}>
                        {airports.map((airport) => <option key={airport.id} value={airport.id}>{airport.name}</option>)}
                      </select> : ''}
                    <ModalInsertAirports
                      airport = {airport}
                      updateAirports = {this.updateAirports}
                    />
                </Segment>
                <Segment style={{backgroundColor: 'aliceblue', display:'flex'}}>
                  <Form onSubmit={this.getDataFromFormUserAirport}> 
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)'}}>Company Info</Label> 
                    <TextArea id='description' placeholder='Describe your company!' style={{ minHeight: 100, marginTop:'1rem'}} /> 
                    <FormGroup style={{display:'inline-grid', margin:'0'}}> 
                      <Input
                          required
                          style={{display:'grid',marginTop:'1rem'}} 
                          placeholder="edit Company address"
                          name = 'adress'
                          label ='contact Adress' size='mini'
                          id = 'adress'
                          />
                      <Input 
                          required
                          style={{display:'grid',marginTop:'1rem'}} 
                          placeholder="edit Company tel."
                          name = 'tel'
                          label ='Tel' size='mini'
                          type = 'number'
                          id = 'tel'
                          />
                      <Input
                          required
                          style={{display:'grid',marginTop:'1rem'}}  
                          placeholder="edit company name"
                          name = 'companyName'
                          label='Company Name' size='mini'
                          id = 'companyName'
                          />   
                      <Button  style={{marginTop:'1rem'}}>Update</Button>        
                    </FormGroup>
                  </Form>  
                </Segment>
              </Segment.Group>
              <Segment>4
              </Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2} divided>
          
        </Grid>
      </div>
    )
  }
}

export default AdminHomePage;
