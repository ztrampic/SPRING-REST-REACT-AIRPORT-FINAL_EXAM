import React from 'react';
import { FormGroup,Form , Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button} from 'semantic-ui-react';
import axios from 'axios';

class ModalInsertAirports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalInsert: false,
            modalUpdate: false,
            airportForUpdate:{
                id:'',
                city:'',
                code:'',
                country:'',
                name:''
            },
            newAirport:{
                city:'',
                code:'',
                country:'',
                name:''
            }
           
        };
        this.toggle = this.toggle.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)
        
        
    }

    toggle(){
        this.setState(prevState => ({
         modalInsert: !prevState.modalInsert,
        
        }));
    }
    toggleUpdate(){
        this.setState(prevState => ({
         modalUpdate: !prevState.modalUpdate,
        }));
    }

    updateAirport=(e)=>{
      
        //axios.put('http://localhost:8080/api/artikal/update', {}).then((response)=>{
            this.toggleUpdate();      
        //})  

    } 
    setNewValuesForNameUpdate = (e) =>{
        
        let {airportForUpdate} = this.state;
        airportForUpdate.name = e.target.value;
        this.setState({
            airportForUpdate
        })
    }


    /////////////////                  N E W   A I R P O R T    /////////////////////////////////////////////////
    setNewAirportName = (e) => {
        let {newAirport} = this.state;
        newAirport.name = e.target.value;
        this.setState({
            newAirport
        })     
    }
    setNewAirportCity = (e) => {
        let {newAirport} = this.state;
        newAirport.city = e.target.value;
        this.setState({
            newAirport
        })     
    }
    setNewAirportCode = (e) => {
        let {newAirport} = this.state;
        newAirport.code = e.target.value;
        this.setState({
            newAirport
        })     
    }
    setNewAirportCountry = (e) => {
        let {newAirport} = this.state;
        newAirport.country = e.target.value;
        this.setState({
            newAirport
        })   
        
          
    }

    insertNewAirport = (e) =>{
        axios.post('http://localhost:8080/api/airport/airportEntry', this.state.newAirport).then((response)=>{
        })
        this.toggle()
    }

  //////////////                               //////////////////////////                  /////////////////////

    render() {
        const airport = this.props.airport
 
        return(
        <div>
            <div style={{ 'display': 'flex' }}>
                  <div>
                        <Button onClick={this.toggle}>Insert</Button>
                    </div>
                     <div>
                        <Button onClick ={this.toggleUpdate}>Update</Button>
                     </div>
                     <div>
                         <Button>Delete</Button>
                     </div>
                  </div>  
            <Modal isOpen={this.state.modalInsert} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>New Airport</ModalHeader>
              <ModalBody>
              <Form>
                <FormGroup>
                    <Label for="exampleEmail">City</Label>
                    <Input id="city"value ={this.state.value} onChange = {this.setNewAirportCity}/>
                    <Label for="exampleEmail">Code</Label>
                    <Input id="code" value ={this.state.value} onChange = {this.setNewAirportCode}/>
                    <Label for="exampleEmail">Country</Label>
                    <Input id="country" value ={this.state.value} onChange = {this.setNewAirportCountry}/>
                    <Label for="exampleEmail">Name</Label>
                    <Input id="name" value ={this.state.value} onChange = {this.setNewAirportName}/>
                </FormGroup>
               </Form>
              </ModalBody>
              <ModalFooter>  
                <Button  onClick={this.insertNewAirport}>Insert New Airport</Button>{' '}
                <Button  onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate} className={this.props.className}>
              <ModalHeader toggle={this.toggleUpdate}>Update Airport</ModalHeader>
              <ModalBody>
              <Form>
                <FormGroup>
                    <Label for="exampleEmail">City</Label>
                    <Input value={airport.city}></Input>
                    <Label for="exampleEmail">Code</Label>
                    <Input value={airport.code}></Input>
                    <Label for="exampleEmail">Country</Label>
                    <Input value={airport.country}></Input>
                    <Label for="exampleEmail">Name</Label>
                    <Input value={airport.name}></Input>
                    <Input type={"hidden"} value={airport.id}></Input>
                </FormGroup>
               </Form>
              </ModalBody>
              <ModalFooter>  
                <Button  onClick={this.updateAirport}>Update Airport</Button>{' '}
                <Button  onClick={this.toggleUpdate}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </div>  
        )
    }
}

export default ModalInsertAirports;
