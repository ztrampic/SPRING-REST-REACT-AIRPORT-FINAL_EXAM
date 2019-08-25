import React, { Component } from 'react'
import { Grid, Segment, Label, Placeholder} from 'semantic-ui-react';
import ModalInsertAirports from '../Components/ModalInsertAirport';
import axios from 'axios';
import _ from 'lodash';



export class AdminHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      airports: [],
      airport: {
        id:'',
        city:'',
        code:'',
        country:'',
        name:''
      },
    }

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


 

   
  render() {
    let airports = this.state.airports
    const updateAirports = this.updateAirports.bind(this)
    
    let airport = this.state.airport;
    console.log("aaaaaaaaaairport for modal" ,airport)
    return (
      <div>
        <div>
          <h1>AdminHomePage</h1>
        </div>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>1
                </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment style={{backgroundColor:'aliceblue'}}>
               <div> 
                 <Label style={{marginBottom: '10px'}}>Select Airport from DropBox</Label>
                <div> 
                    {airports? <select onChange={this.handleSelectChange} style={{marginBottom:'20px',width:'100%'}}>
                      {airports.map((airport) => <option key={airport.id} value={airport.id}>{airport.name}</option>)}
                    </select> : ''}
                </div>
                  <div style={{ 'display': 'flex' }}>
                    <ModalInsertAirports
                      airport = {airport}
                      updateAirports = {updateAirports}
                    >
                    </ModalInsertAirports>
                  </div>
                </div>
              </Segment>
              <Segment>
              </Segment>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default AdminHomePage;
