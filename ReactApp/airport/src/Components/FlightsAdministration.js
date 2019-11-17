import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { select } from '../Helpers/DataUtilsHelper';
import ModalTicketValue from './modals/ModalTicketValue';

class FlightsAdministration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            airCompany:JSON.parse(sessionStorage.getItem('userAircompanyInfo')),
            flights:[],
            isModalTicketValueOpen:false,
            idFlight:'',
            ticketTypes:[],
            ticketValue:{},
            apiTicketValues:[],
        }
        this.loadFlights = this.loadFlights.bind(this);
        this.closeModalTicketValue = this.closeModalTicketValue.bind(this);
        this.formSubmit = this.formSubmit.bind(this)
        this.getTicketValuesForFlight = this.getTicketValuesForFlight.bind(this)
    }
    componentDidMount(){
        this.getTicketTypes();
    }

    formSubmit(data){
        console.log(data,"VALUEIZDROPA");
        select('addNewTicketValue',data)
            .then(res=>{
                const apiRes = res.data;
                this.getTicketValuesForFlight(data.idFlight)
            })
    }

    getTicketValuesForFlight(id){
        select('getAllTicketValues',id)
        .then(res=>{
            const apiRes = res.data;
            this.setState({apiTicketValues:apiRes})
        })
    }
    

    getTicketTypes(){
        select('getAllTicketTypes')
        .then(res=>{
            const apiTypes= res.data;
            this.setState({ticketTypes:apiTypes})
        })
    }

    openTicketValueModal(flightId){
        this.getTicketValuesForFlight(flightId)
        this.setState({isModalTicketValueOpen:true,idFlight:flightId})
    }
    closeModalTicketValue(){
        this.setState({isModalTicketValueOpen:false})
    }

    loadFlights(id){
        select('getAllForAirCompany',id)
        .then(res=>{
            const apiFlights = res.data;
            console.log("APIFLIGHTS",apiFlights);
            this.setState({
                flights:apiFlights
            })
        })
    }
    
    render() {
        const {flights, airCompany, isModalTicketValueOpen, ticketTypes, idFlight, apiTicketValues} = this.state
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
                    <Table.Cell style={{}}>{flight.flightScheduleDTO.status}</Table.Cell>
                    <Table.Cell><Button onClick={()=>this.openTicketValueModal(flight.id)} size='tiny' style={{color:'white',backgroundColor:'#2185d0',fontSize:'10px'}}>Tickets</Button></Table.Cell>
                </Table.Row>        
            )
        });
        return (
            <div>
                <Button size='tiny' style={{color:'white',backgroundColor:'#21ba45',marginTop:'1rem',marginLeft:'1rem',fontSize:'10px'}} onClick={()=>this.loadFlights(airCompany.idAirCompany)}>Load Flights</Button>
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
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Options</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableFlights}
                    </Table.Body>
                </Table>
                <ModalTicketValue
                    open={isModalTicketValueOpen}
                    close = {this.closeModalTicketValue}
                    ticketTypes = {ticketTypes}
                    formSubmit = {this.formSubmit}
                    idFlight = {idFlight}
                    apiTicketValues = {apiTicketValues}
                />
            </div>
        )
    }
}

export default FlightsAdministration