import React  from 'react'
import { Modal, Button, Segment, Label, Form, Input } from 'semantic-ui-react'
import AirCompanyTabsAirportSearchTable from '../AirCompanyAdmin/AirCompanyTabsAirportSearchTable'
import { select } from '../../Helpers/DataUtilsHelper'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export class ModalFlightRequest extends React.Component {
   constructor(props){
       super(props)
       this.state={
        searchResultAirports:[],
        dateForRequest: new Date(),
       }
       this.searchAirportByAirportCity = this.searchAirportByAirportCity.bind(this)
       this.checkAvailableDateForflight = this.checkAvailableDateForflight.bind(this)
       this.handleChangeDate = this.handleChangeDate.bind(this)
   }

   handleChangeDate = date => {
    this.setState({
      dateForRequest: date
    })
  }

   searchAirportByAirportCity(){
    const airportCityName = document.getElementById('airportCityName').value;
    select('getSearchAirportByCity', airportCityName)
     .then(res => {
       const apiAirports = res.data;
       this.setState({searchResultAirports:apiAirports})  
     })
   }

   checkAvailableDateForflight(){
    let {dateForRequest} = this.state;
    dateForRequest = moment(dateForRequest).format('DD-MM-YYYY')
    console.log("DATE", dateForRequest);
    select('dateForRequest', dateForRequest)
    .then(res => {
      const numberOfTermins = res.data;    //nije uradjeno
    })
  }
   
    render() {
        const {searchResultAirports}=this.state;
        return (
            <div>
                <Modal dimmer='inverted' open={this.props.open} style={{position:'absolute',maxHeight:'50rem',width:'50%',left:'25%',right:'25%',top:'10%'}}>
                    <Modal.Header 
                        style={{height:'10%', color:'rgb(33, 133, 208)',backgroundColor:'#cae2f3'}}>New request :
                        <span style={{marginLeft:'1rem'}}>Mark:</span>
                        <span style={{color:'red'}}>{this.props.airplane.mark}</span>
                        <span style={{marginLeft:'1rem'}}>Max distance:</span>
                        <span style={{color:'red'}}>{this.props.airplane.maxFlyDistance}Km</span>
                        <span style={{marginLeft:'1rem'}}>Seats:</span>
                        <span style={{color:'red'}}>{this.props.airplane.seatingCapacity}</span>
                    </Modal.Header>
                    <Modal.Content>
                        <Segment.Group>
                        <Segment>                    
                        <Label style={{marginBottom:'1rem', display:'flex', color:'white', background:'rgb(202, 226, 243)'}}>Search airport city destination</Label>
                        <Form onSubmit={this.searchAirportByAirportCity}>
                            <Input
                            id='airportCityName' 
                            minLength = {4}
                            required
                            icon={{name: 'search', circular: true}}
                            placeholder='Search...'
                            />
                            <Button style={{marginLeft:'1rem'}}>Search</Button>
                        </Form>  
                        </Segment>
                        <Segment>
                            <AirCompanyTabsAirportSearchTable
                            searchResultAirports={searchResultAirports}
                            />  
                        </Segment>
                        <Segment>
                            <Label style={{display:'flex', color:'white', background:'rgb(202, 226, 243)'}}>Flight check with departure Airport</Label>
                            <Form onSubmit={this.checkAvailableDateForflight} style={{paddingTop:'1rem'}}>
                            <Form.Group style={{margin:0}}>
                                <DatePicker
                                selected={this.state.dateForRequest}
                                onChange={this.handleChangeDate}
                                placeholderText={this.state.date}
                                />
                                <Button type='submit'>Check</Button>
                                <Label id='positive' style={{ borderWidth:'thin', borderColor:'green', backgroundColor:'white', color:'green', width:'75px',visibility:'visible', textAlign:'center', lineHeight:'2'}}>Dostupno</Label>
                                <Label id='negative' style={{ borderWidth:'thin', borderColor:'red',backgroundColor:'white', color:'red', width:'75px',visibility:'visible', textAlign:'center', lineHeight:'2'}}>Puno</Label>
                            </Form.Group>
                            </Form>
                        </Segment>
                    </Segment.Group>

                    </Modal.Content>
                    <Modal.Actions style={{position:'absolute',right:0, bottom:0}}><Button onClick={this.props.closeModalFlightRequest}>Close</Button></Modal.Actions>
                    
                </Modal>
            </div>
        )
    }
}

export default ModalFlightRequest;
