import React, { Component } from 'react'
import { Grid, Segment, Label, Form, TextArea, Input, FormGroup, Button} from 'semantic-ui-react';

import axios from 'axios';
import ModalInsertAirports from '../Components/AirportAdmin/ModalInsertAirport';




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
    }
    this.getDataFromFormUserAirport = this.getDataFromFormUserAirport.bind(this)
    this.updateAirports = this.updateAirports.bind(this)
  }

  componentDidMount() {
    this.getAllAirports();
  }
  
 
  handleSelectChange = (event) => {
    const airports  = this.state.airports;
    const airportId = event.target.value;
    let aerodrom = airports.find(a => a.id === airportId);
    this.setState({
      airport: aerodrom
      
    })
  }

  getAllAirports(){
    axios.get('http://localhost:8080/api/airport/getAllAirports')
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
          let airports = res.data;
          window.location.reload();
          
          
    })       
  }
  

   
  render() {
    const {airports,airport} = this.state;

    return (
      <div>
        <div>
          <h1>AdminHomePage {}</h1>
        </div>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>             
              <Segment style={{backgroundColor:'aliceblue'}}>
                <Label size = 'medium'>Accoiunts</Label> 
                
              </Segment>          
            </Grid.Column>
            <Grid.Column>
              <Segment.Group vertical>
              <Segment style={{backgroundColor:'aliceblue'}}>
                 <Label style={{marginBottom: '10px'}}>Select Airport from DropBox</Label>
                    {airports? <select onChange={this.handleSelectChange} style={{marginBottom:'20px',width:'100%'}}>
                      {airports.map((airport) => <option key={airport.id} value={airport.id}>{airport.name}</option>)}
                    </select> : ''}
                  <ModalInsertAirports
                    airport = {airport}
                    updateAirports = {this.updateAirports}
                  />
              </Segment>
              <Segment style={{backgroundColor: 'aliceblue', display:'flex'}}>
                <Form onSubmit={this.getDataFromFormUserAirport}>
                  <Label style={{width:'100%'}}>Company Info</Label>  
                  <TextArea id='description' placeholder='Describe your company!' style={{ minHeight: 100}} /> 
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
                    <Button  style={{marginTop:'1rem'}}>Set first time User of Application</Button>          
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
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>0        
              </Segment>
            </Grid.Column>
           
            <Grid.Column>
              <Segment>3
              </Segment>
              <Segment>4
              </Segment>
              <Segment>5</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default AdminHomePage;
