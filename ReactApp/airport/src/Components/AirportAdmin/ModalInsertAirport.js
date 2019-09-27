import React from 'react';
import { FormGroup, Form, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Grid } from 'semantic-ui-react';
import { select } from '../../Helpers/DataUtilsHelper';

class ModalInsertAirports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalInsert: false,
            modalUpdate: false,
            modalDelete: false,
            airportForUpdate: {
                id:'',
                city: '',
                code: '',
                country: '',
                name: '',
                lat:'',
                lon:'',
                direct_flights:'',
                carriers:''
            },
            newAirport: {
                city: '',
                code: '',
                country: '',
                name: '',
                lat:'',
                lon:'',
                direct_flights:'',
                carriers:''
            },

        };
        this.toggle = this.toggle.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.toggleDelete = this.toggleDelete.bind(this)


    }


    toggle() {
        this.setState(prevState => ({
            modalInsert: !prevState.modalInsert,

        }));
    }
    toggleUpdate() {
        this.setState(prevState => ({
            modalUpdate: !prevState.modalUpdate,
        }));
    }
    toggleDelete() {
        this.setState(prevState => ({
            modalDelete: !prevState.modalDelete,
        }));
    }


    enableChangeUpdate = (e) => {
        this.setState({ inputValue: e.target.value });
    }


    /////////////////                  N E W   A I R P O R T    /////////////////////////////////////////////////
    setNewAirportName = (e) => {
        let { newAirport } = this.state;
        newAirport.name = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportCity = (e) => {
        let { newAirport } = this.state;
        newAirport.city = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportCode = (e) => {
        let { newAirport } = this.state;
        newAirport.code = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportCountry = (e) => {
        let { newAirport } = this.state;
        newAirport.country = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportLatitude = (e) => {
        let { newAirport } = this.state;
        newAirport.lat = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportLongatude = (e) => {
        let { newAirport } = this.state;
        newAirport.lon = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportMaxDepartures = (e) => {
        let { newAirport } = this.state;
        newAirport.carriers = e.target.value;
        this.setState({
            newAirport
        })
    }
    setNewAirportMaxArrivals = (e) => {
        let { newAirport } = this.state;
        newAirport.direct_flights = e.target.value;
        this.setState({
            newAirport
        })
    }

    insertNewAirport = (e) => {
       select('insertNewAirportAdmin', this.state.newAirport)
            .then((response) => {
                let airports = response.data;
                let newAirport = {};
                this.props.updateAirports(airports, newAirport);
                this.toggle()
            })
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////    U P D A T E     A I R P O R T  ////////////////////////////////////////////////////////////////////////


    setNewAirportNameForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        airportForUpdate.name = e.target.value;
        if (e.target.value === undefined) {
            airportForUpdate.name = document.getElementById('nameUpdate').defaultValue;
        }
        this.setState({
            airportForUpdate
        })

    }
    setNewAirportCityForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        airportForUpdate.city = e.target.value;
        if (e.target.value === undefined) {
            airportForUpdate.city =document.getElementById('cityUpdate').defaultValue;
        }  
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportCodeForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        airportForUpdate.code = e.target.value;
        if (e.target.value === undefined) {
            airportForUpdate.code =document.getElementById('codeUpdate').defaultValue;
        }
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportCountryForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        if (e.target.value === undefined) {
            airportForUpdate.country = document.getElementById('countryUpdate').defaultValue;
        }
        airportForUpdate.country = e.target.value;
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportLatitudeForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        if(e.target.value === undefined){
            airportForUpdate.lat = document.getElementById('latitudeUpdate').defaultValue;
        }
        airportForUpdate.lat = e.target.value;
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportLongatudeForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        if(e.target.value === undefined){
            airportForUpdate.lon = document.getElementById('longatudeUpdate').defaultValue;
        }
        airportForUpdate.lon = e.target.value;
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportMaxArrivalsForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        if(e.target.value === undefined){
            airportForUpdate.direct_flights = document.getElementById('maxArrivalsUpdate').defaultValue;
        }
        airportForUpdate.direct_flights = e.target.value;
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportMaxDepartureForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        if(document.getElementById('maxArrivalsUpdate'.value === '')){
            airportForUpdate.direct_flights = document.getElementById('maxArrivalsUpdate').defaultValue;
        }
        airportForUpdate.direct_flights = e.target.value;
        this.setState({
            airportForUpdate
        })
    }
    setNewAirportMaxDepartureForUpdate = (e) => {
        let { airportForUpdate } = this.state;
        airportForUpdate.id = document.getElementById('idHidden').value
        if(e.target.value === undefined){
            airportForUpdate.carriers = document.getElementById('maxDeparturesUpdate').defaultValue;
        }
        airportForUpdate.carriers = e.target.value;
        this.setState({
            airportForUpdate
        })
    }

    updateAirport = (e) => {
       select('updateAirportAdmin', this.state.airportForUpdate)
            .then((response) => {
                let airports = response.data;
                let airportForUpdate ={};
                this.props.updateAirports(airports, airportForUpdate);
                this.toggleUpdate();
            })
        console.log("UPDATE",this.state.airportForUpdate);
        
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////   D E L E T E    A I R P O R T       /////////////////////////////////////////////////


    hardDeleteAirport = (e) => {
        const id = document.getElementById('idHiddenForDelete').value;
      select('deleteAirportAdmin', id)
            .then((response) => {
                let airports = response.data;
                let airport = this.state.newAirport;
                this.props.updateAirports(airports,airport);
                this.toggleDelete();
            })
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
    render() {
        const airport = this.props.airport

        return (
            <div style={{width:'100%'}}>
                <div style={{ 'display': 'flex' }}>
                    <div>
                        <Button onClick={this.toggle}>Insert</Button>
                    </div>
                    <div style={{width:'100%'}}>
                        <Button onClick={this.toggleUpdate}>Update</Button>
                    </div>
                    <div>
                        <Button onClick={this.toggleDelete}>Delete</Button>
                    </div>
                </div>
                <Modal isOpen={this.state.modalInsert} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New Airport</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup style = {{display:'flex'}}>
                                <Grid width={16} style = {{display:'contents'}}>     
                                    <Grid.Column width={8}>
                                        <Label>City</Label>
                                        <Input required id="city" value={this.state.value} onChange={this.setNewAirportCity} />
                                        <Label>Code</Label>
                                        <Input required id="code" value={this.state.value} onChange={this.setNewAirportCode} />
                                        <Label>Country</Label>
                                        <Input required id="country" value={this.state.value} onChange={this.setNewAirportCountry} />
                                        <Label>Name</Label>
                                        <Input required id="name" value={this.state.value} onChange={this.setNewAirportName} />
                                    </Grid.Column>    
                                    <Grid.Column width={8}>
                                        <Label>Latitute</Label>
                                        <Input type='number' required id="latitude" value={this.state.value} onChange={this.setNewAirportLatitude} />
                                        <Label>Longatude</Label>
                                        <Input  type='number' required id="longatute" value={this.state.value} onChange={this.setNewAirportLongatude} />
                                        <Label>Max arrivals</Label>
                                        <Input  type='number' required id="maxArrivals" value={this.state.value} onChange={this.setNewAirportMaxArrivals} />
                                        <Label>Max departures</Label>
                                        <Input  type='number' required id="maxDepartures" value={this.state.value} onChange={this.setNewAirportMaxDepartures} />
                                    </Grid.Column>
                                </Grid>    
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.insertNewAirport}>Insert New Airport</Button>{' '}
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate} className={this.props.className}>
                    <ModalHeader toggle={this.toggleUpdate}>Update Airport</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup style = {{display:'flex'}}>
                                <Grid width={16} style = {{display:'contents'}}>
                                    <Grid.Column width={8}>
                                        <Label>City</Label>
                                        <Input id="cityUpdate" defaultValue={airport.city} onChange={this.setNewAirportCityForUpdate}></Input>
                                        <Label>Code</Label>
                                        <Input id="codeUpdate" defaultValue={airport.code} onChange={this.setNewAirportCodeForUpdate}></Input>
                                        <Label>Country</Label>
                                        <Input id="countryUpdate" defaultValue={airport.country} onChange={this.setNewAirportCountryForUpdate}></Input>
                                        <Label>Name</Label>
                                        <Input id="nameUpdate" defaultValue={airport.name} onChange={this.setNewAirportNameForUpdate}></Input>
                                        <Input id='idHidden' type={"hidden"} value={airport.id}></Input>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Label>Latitude</Label>
                                        <Input type='number' id="latitudeUpdate" defaultValue={airport.lat} onChange={this.setNewAirportLatitudeForUpdate}></Input>
                                        <Label>Longatude</Label>
                                        <Input type='number' id="longatudeUpdate" defaultValue={airport.lon} onChange={this.setNewAirportLongatudeForUpdate}></Input>
                                        <Label>Max Arrivals</Label>
                                        <Input type='number' id="maxArrivalsUpdate" defaultValue={airport.direct_flights} onChange={this.setNewAirportMaxArrivalsForUpdate}></Input>
                                        <Label>Max Departures</Label>
                                        <Input type='number' id="maxDeparturesUpdate" defaultValue={airport.carriers} onChange={this.setNewAirportMaxDepartureForUpdate}></Input>
                                    </Grid.Column>
                                </Grid>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.updateAirport}>Update Airport</Button>{' '}
                        <Button onClick={this.toggleUpdate}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalDelete} toggle={this.toggleDelete} className={this.props.className}>
                    <ModalHeader toggle={this.toggleDelete}>Delete Airport</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <h3 style={{textAlign:'center'}}>Are you sure you want to delete selected airport?</h3>
                                <Input id='idHiddenForDelete' type={"hidden"} value={airport.id}></Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: '#60dc60' }} onClick={this.hardDeleteAirport}>Delete Airport</Button>{' '}
                        <Button style={{ backgroundColor: 'red' }} onClick={this.toggleDelete}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalInsertAirports;
