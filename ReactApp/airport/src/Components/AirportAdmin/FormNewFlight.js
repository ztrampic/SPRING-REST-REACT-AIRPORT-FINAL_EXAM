import React, { Component } from 'react'
import { Form, Button, Label, Grid, Input, GridColumn } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { select } from '../../Helpers/DataUtilsHelper';

class FormNewFlight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idAirplane: '',
            flightNumber: '',
            idDestination: '',
            departureDate: new Date(),
            idDestination: this.props.flightRequest.destinationAirportDTO.id,
            homeAirportId: '',
        }
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.insertFlight = this.insertFlight.bind(this)
    }

    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem('userAirport'));
        const idHome = user.airportDTO.id
        const id = this.props.flightRequest.airplaneDTO.idAirplane
        const mark = this.props.flightRequest.airplaneDTO.mark
        const destinationAirport = this.props.flightRequest.destinationAirportDTO.id
        this.setState({ idAirplane: id, flightNumber: mark, idDestination: destinationAirport, homeAirportId: idHome })
    }

    insertFlight() {
        const data = this.state
        const departureTime = document.getElementById('departureTime').value
        const arrivalTime = document.getElementById('arrivalTime').value
        const departureDate = moment(data.departureDate).format('YYYY-MM-DD')
        const newData = { ...data, departureTime, arrivalTime, departureDate }
        select('insertNewFlight', newData)
            .then(res => {
                const apiResponse = res.status;
                if (apiResponse === 200) {
                    select('approveFlightRequest', this.props.flightRequest.idFR)
                        .then(res => {
                            const apiRes = res.status;
                            window.location.reload();
                        })
                }

            })

    }
    handleChangeDate = date => this.setState({ departureDate: date })

    render() {
        return (
            <div style={{marginTop:'0.5rem'}}>
              <Form style={{display:'flex'}} onSubmit={this.insertFlight}> 
                <GridColumn style={{marginRight:'1rem'}}>
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)'}}>Departure date</Label>
                    <DatePicker
                        selected={this.state.departureDate}
                        onChange={this.handleChangeDate}
                        placeholderText={this.state.date}
                    />
                </GridColumn>
                <GridColumn style={{marginRight:'1rem'}}>
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)'}}>Departure time</Label>
                    <input type='time' id="departureTime" />
                </GridColumn>
                <GridColumn style={{marginRight:'1rem'}}>
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)'}}>Arrival time</Label>
                    <input type='time' id="arrivalTime" />
                </GridColumn>
                <GridColumn>
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)',marginBottom:'5px'}}>{this.props.flightRequest.destinationAirportDTO.name}</Label>
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)'}}>{this.props.flightRequest.airplaneDTO.airCompanyDTO.name}</Label>
                    <Button type="submit" size='tiny' style={{fontSize:"10px",marginTop:'0.5rem',backgroundColor:'rgb(33, 186, 69)',color:'white'}}>Insert New Flight</Button>
                </GridColumn>
              </Form> 
            </div>
        )
    }
}



export default FormNewFlight

{/* <Form style={{display:'grid'}} onSubmit={this.insertFlight}>
<Label>Departure date</Label>
<DatePicker
    selected={this.state.departureDate}
    onChange={this.handleChangeDate}
    placeholderText={this.state.date}
/>
<Label>Departure time</Label>
<input type='time' id="departureTime"/>
<Label>Arrival time</Label>    
<input type='time' id="arrivalTime"/>
<Label>{this.props.flightRequest.destinationAirportDTO.name}</Label>
<Label>{this.props.flightRequest.airplaneDTO.airCompanyDTO.name}</Label>
<Button type="submit"></Button>
</Form> */}