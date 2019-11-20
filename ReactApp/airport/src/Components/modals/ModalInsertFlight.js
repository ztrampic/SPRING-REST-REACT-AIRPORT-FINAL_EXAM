import React from 'react'
import { Modal, Button, Grid, Form} from 'semantic-ui-react'
import DepartureTable from '../AirportAdmin/DepartureTable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { select } from '../../Helpers/DataUtilsHelper';
import moment from 'moment';
import FormNewFlight from '../AirportAdmin/FormNewFlight';

class ModalInsertFlight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dateForRequest: new Date(),
            flights:[],
            availableTermins:'',
        }
        this.loadFlights = this.loadFlights.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
    }

    componentDidMount() {
    }

    countFlightsForDate(flights){
        const result = flights[0].departureAirportDTO.carriers - flights.length
        return result;
    }

    loadFlights(){
        let {dateForRequest} = this.state;
        dateForRequest = moment(dateForRequest).format('YYYY-MM-DD')
        select('getAllForDate',dateForRequest)
         .then(res=>{
             const apiFlights = res.data;
             const term = this.countFlightsForDate(apiFlights)
             this.setState({flights:apiFlights,availableTermins:term})
        })
    }

    handleChangeDate = date => {
        this.setState({
          dateForRequest: date
        })
      }

    render() {
        const {flights, availableTermins, dateForRequest} = this.state
        const flightRequest = this.props.flightRequest;
        return (
            <div>
                <Modal dimmer='inverted' open={this.props.open} style={{ maxHeight: '40rem', position: 'absolute', width: '50%', left: "25%", right: '25%', top: '20%' }}>
                    <Modal.Header style={{ maxHeight: '5vh',backgroundColor:'rgb(33, 133, 208)',color:'white'}}>Flight Check and New Flight<span style={{color:'red',position:'absolute',right:1}}>Available termins:{availableTermins}</span></Modal.Header>
                    <Modal.Content>
                        <Grid.Row style={{borderColor: 'black', borderStyle: 'double' }}>    
                          <Form onSubmit={this.loadFlights}>
                            <Form.Group style={{margin:'5px'}}>
                                <DatePicker
                                    selected={this.state.dateForRequest}
                                    onChange={this.handleChangeDate}
                                    placeholderText={this.state.date}
                                />
                                <Button size='tiny' style={{margin:'auto',marginLeft:'5px',color:'white',backgroundColor:'rgb(33, 186, 69)'}} type='submit'>Load</Button>
                            </Form.Group>    
                          </Form>  
                        </Grid.Row>
                        <Grid.Row style={{borderColor: 'black', borderStyle: 'double', marginTop:'1rem' }}>
                            <DepartureTable
                                    flights = {flights}
                                />
                        </Grid.Row>
                        <Grid.Row style={{ borderColor: 'black', borderStyle: 'double', display:'flex',marginTop:'1rem' }}>
                            <FormNewFlight
                                flightRequest = {flightRequest}
                            />
                        </Grid.Row>

                    </Modal.Content>
                    <Modal.Actions style={{ width: '100%', position: 'absolute', bottom: '0',backgroundColor:'#2185d0' }}>
                        <Button style={{backgroundColor:'white'}} onClick={this.props.close}>Close</Button>
                        <Button onClick={()=>this.props.declineFlightRequest(flightRequest.idFR)} type="submit" size='tiny' style={{ position:'absolute',left:0, fontSize:"10px",marginTop:'0.5rem',backgroundColor:'red',color:'white'}}>Decline Flight</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}


export default ModalInsertFlight