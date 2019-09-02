import React from 'react';
import { FormGroup, Form, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

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
            },
            newAirport: {
                city: '',
                code: '',
                country: '',
                name: '',
                lat:'',
                lon:'',
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

    insertNewAirport = (e) => {
        axios.post('http://localhost:8080/api/airport/airportEntry', this.state.newAirport)
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

    updateAirport = (e) => {
        axios.put('http://localhost:8080/api/airport/updateAirport', this.state.airportForUpdate)
            .then((response) => {
                let airports = response.data;
                let airportForUpdate = this.state.airportForUpdate;
                this.props.updateAirports(airports, airportForUpdate);
                this.toggleUpdate();
            })

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////   D E L E T E    A I R P O R T       /////////////////////////////////////////////////


    hardDeleteAirport = (e) => {
        const id = document.getElementById('idHiddenForDelete').value;
        axios.get('http://localhost:8080/api/airport/hardDeleteAirport/'+id)
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
                            <FormGroup>
                                <Label for="exampleEmail">City</Label>
                                <Input id="city" value={this.state.value} onChange={this.setNewAirportCity} />
                                <Label for="exampleEmail">Code</Label>
                                <Input id="code" value={this.state.value} onChange={this.setNewAirportCode} />
                                <Label for="exampleEmail">Country</Label>
                                <Input id="country" value={this.state.value} onChange={this.setNewAirportCountry} />
                                <Label for="exampleEmail">Name</Label>
                                <Input id="name" value={this.state.value} onChange={this.setNewAirportName} />
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
                            <FormGroup>
                                <Label for="exampleEmail">City</Label>
                                <Input id="cityUpdate" defaultValue={airport.city} onChange={this.setNewAirportCityForUpdate}></Input>
                                <Label for="exampleEmail">Code</Label>
                                <Input id="codeUpdate" defaultValue={airport.code} onChange={this.setNewAirportCodeForUpdate}></Input>
                                <Label for="exampleEmail">Country</Label>
                                <Input id="countryUpdate" defaultValue={airport.country} onChange={this.setNewAirportCountryForUpdate}></Input>
                                <Label for="exampleEmail">Name</Label>
                                <Input id="nameUpdate" defaultValue={airport.name} onChange={this.setNewAirportNameForUpdate}></Input>
                                <Input id='idHidden' type={"hidden"} value={airport.id}></Input>
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
