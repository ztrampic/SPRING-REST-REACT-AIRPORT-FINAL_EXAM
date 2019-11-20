import React from 'react'
import { Form, SegmentGroup, Segment, Label, Button, Table } from 'semantic-ui-react'
import { select } from '../../Helpers/DataUtilsHelper'
import { Redirect } from 'react-router-dom'
import {
  BrowserRouter,
  Route,
} from "react-browser-router";

class SearchDepartures extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          redirect: false,
          redirectShop: false,
          flights:[],
          flightNumber:'',
          cityDestination:'',
          airCompanyName:'',
          idAirportDeparture:'',
          idFlight:'',
        }
        this.searchFlights = this.searchFlights.bind(this)
        this.handleChangeFlightNumber = this.handleChangeFlightNumber.bind(this)
        this.handleChangeDestinationCity = this.handleChangeDestinationCity.bind(this)
        this.handleChangeAirlinesName = this.handleChangeAirlinesName.bind(this)
        this.bookFlight = this.bookFlight.bind(this)
    }

  componentDidMount(){
    const user = JSON.parse(sessionStorage.getItem('userAirport')); 
    const id = user.airportDTO.id
    this.setState({idAirportDeparture:id})
  }  

  handleChangeFlightNumber(event){
    this.setState({flightNumber: event.target.value});
  }
  
  handleChangeDestinationCity(event){
    this.setState({cityDestination: event.target.value});
  }

  handleChangeAirlinesName(event){
    this.setState({airCompanyName: event.target.value});
  }

  searchFlights(){
    const {flightNumber,cityDestination,airCompanyName,idAirportDeparture} = this.state;
    const searchData = {flightNumber,cityDestination,airCompanyName,idAirportDeparture}
    select('searchFlights',searchData)
    .then(res=>{
      const apiRes = res.data;
      this.setState({flights:apiRes,flightNumber:'',cityDestination:'',airCompanyName:''})
    })
  }

  renderRedirectLogin = () => {
    if (this.state.redirect) {
      return <Redirect to='/loginForm' />
    }
  }
  renderRedirectShop = () => {
    if (this.state.redirectShop) {
      return window.location.href = "https://i.ytimg.com/vi/fqqWrQENSDc/maxresdefault.jpg";
    }
  }

  bookFlight(id){
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user,"User");
      if (user === null) {
        this.setState({redirect:true})
      }else{
        this.setState({redirectShop:true,idFlight:id})
      }
    }



    render() {
      const {flights,flightNumber,cityDestination,airCompanyName,idAirportDeparture} = this.state;
      let tableFlights = flights.map((flight)=>{
        return (
            <Table.Row style={{fontSize:'11px',textAlign:'center'}}>
                <Table.Cell>{flight.flightNumber}</Table.Cell>
                <Table.Cell>{flight.flightScheduleDTO.departureDate}</Table.Cell>
                <Table.Cell>{flight.flightScheduleDTO.departureTime}</Table.Cell>
                <Table.Cell>{flight.flightScheduleDTO.arrivalDate}</Table.Cell>
                <Table.Cell>{flight.flightScheduleDTO.arrivalTime}</Table.Cell>
                <Table.Cell>{flight.arrivalAirportDTO.code}</Table.Cell>
                <Table.Cell>{flight.arrivalAirportDTO.city}</Table.Cell>
                <Table.Cell>{flight.availableSeats}</Table.Cell>
                <Table.Cell><Button onClick={()=>this.bookFlight(flight.id)} size='mini'>Book</Button></Table.Cell>
                {/* <Table.Cell style={{}}>{flight.flightScheduleDTO.status}</Table.Cell> */}
                {/* <Table.Cell><Button onClick={()=>this.openTicketValueModal(flight.id)} size='tiny' style={{color:'white',backgroundColor:'#2185d0',fontSize:'10px'}}>Tickets</Button></Table.Cell> */}
            </Table.Row>        
        )
    });

        return (
            <div>
              {this.renderRedirectLogin()}
              {this.renderRedirectShop()}
                <SegmentGroup horizontal>    
                  <Segment style={{width:'20%'}}>
                  <Form onSubmit = {this.searchFlights}>  
                      <Label style={{color:'white',backgroundColor:'#2185d0'}} size='mini' ribbon>Destination City</Label>
                      <Form.Input
                        onChange={this.handleChangeDestinationCity}
                        size = 'mini'
                        name = 'destination'
                        placeholder = 'Destination'
                        value = {cityDestination}
                      />
                      <Label style={{color:'white',backgroundColor:'#2185d0'}} size='mini' ribbon>Flight number</Label>
                      <Form.Input
                        onChange={this.handleChangeFlightNumber}
                        size = 'mini'
                        name = 'flightNumber'
                        placeholder = 'ex. YU310'
                        value = {flightNumber}
                      />
                      <Label style={{color:'white',backgroundColor:'#2185d0'}} size='mini' ribbon>Airlines</Label>
                      <Form.Input
                        onChange={this.handleChangeAirlinesName}
                        size = 'mini'
                        name = 'airlines'
                        placeholder = 'Airlines'
                        value = {airCompanyName}
                      />
                      <Button style={{color:'white',backgroundColor:'#2185d0'}} type='submit' size='mini' icon='search'>Search</Button>
                  </Form>    
                  </Segment>
                  <Segment style={{width:'80%'}}>
                  <Table celled fixed singleLine style={{marginTop:'1rem'}}>
                    <Table.Header style={{fontSize:'11px',textAlign:'center'}}>
                        <Table.Row>
                            <Table.HeaderCell>Flight Number</Table.HeaderCell>
                            <Table.HeaderCell>Departure Date</Table.HeaderCell>
                            <Table.HeaderCell>Departure Time</Table.HeaderCell>
                            <Table.HeaderCell>Arrival Date</Table.HeaderCell>
                            <Table.HeaderCell>Arrival Time</Table.HeaderCell>
                            <Table.HeaderCell>Destination Code</Table.HeaderCell>
                            <Table.HeaderCell>Destination City</Table.HeaderCell>
                            <Table.HeaderCell>Available Seats</Table.HeaderCell>
                            <Table.HeaderCell>Reservation</Table.HeaderCell>
                            {/* <Table.HeaderCell>Options</Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableFlights}
                    </Table.Body>
                </Table>
                  </Segment>
                </SegmentGroup>  
            </div>
        )
    }
}

export default SearchDepartures