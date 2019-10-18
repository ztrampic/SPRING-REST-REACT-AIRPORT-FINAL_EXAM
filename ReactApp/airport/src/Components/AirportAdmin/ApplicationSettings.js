import React, { Component } from 'react'
import { Segment, Label, Button, Form, TextArea, FormGroup, Input } from 'semantic-ui-react'
import ModalInsertAirports from './ModalInsertAirport'
import { select } from '../../Helpers/DataUtilsHelper'


class ApplicationSettings extends Component {
    constructor(props) {
        super(props)
        this.state={
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
            userOfApplicationData:{
              id:'',
              airportDTO:{},
              description:'',
              phoneNumber:'',
              contact:'',
              companyName:''
            },
            isLoggedIn:false,
        }
        this.iniEntryOfApplicationUser = this.iniEntryOfApplicationUser.bind(this)
        this.getDataFromFormUserAirport = this.getDataFromFormUserAirport.bind(this)
        this.updateAirports = this.updateAirports.bind(this)
    }

    componentDidMount() {
        this.getAllAirports();
        this.getUserAirportData();
    }

    handleSelectChange = (event) => {
        const airports  = this.state.airports;
        const airportId = event.target.value;
        let aerodrom = airports.find(a => a.id === airportId);
        this.setState({
          airport: aerodrom
          
        })
    }

    handleSelectChange = (event) => {
        const airports  = this.state.airports;
        const airportId = event.target.value;
        let aerodrom = airports.find(a => a.id === airportId);
        this.setState({
          airport: aerodrom
          
        })
    }

    updateAirports(airports,airport){
        this.setState({airports:airports, airport:airport})
    }

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
       select('updateUserOfAppAdmin', userOfApplicationData)
            .then(res => {
              let apiUserOfApplicationData = res.data;
              this.setState({userOfApplicationData:apiUserOfApplicationData})
              window.location.reload();
        })       
    }

    

    iniEntryOfApplicationUser(){
        const{airport}=this.state;
        const airportDTO = airport;
        if(airportDTO.id === ''){
          alert('PICK AIRPORT FROM DROPDOWN')
        }else{
          let userOfApplicationData = {
            id:'',
            airportDTO,
            description:'',
            phoneNumber:'',
            contact:'',
            companyName:''
        }
         select('setFirstTimeUserOfApp', userOfApplicationData)
          .then(res=>{
            let apiUserAirport = res;
          })
        }
      }

    getAllAirports(){
        select('getAllAirportsAdmin')
            .then(res => {
              let airports = res.data;
              //airports =_.sortBy(airports,'name')
              this.setState({ airports });
            })
        }
    setUserOfApplicationButtonDisabled(){
        const {userOfApplicationData} = this.state;
        if(userOfApplicationData.id === ""){
            document.getElementById('firstTime').disabled = false;
        }else{
            document.getElementById('firstTime').disabled = true;
        }
    }
    getUserAirportData(){
        const  idUserAirport = 1;
        select('getUserOfAppInfoAdmin',idUserAirport)
          .then(res => {  
            let userAirportDataApi = res;   
            this.setState({ userOfApplicationData : userAirportDataApi });      
            this.setUserOfApplicationButtonDisabled();
          })   
       }     

    render() {
        const {airports,airport} = this.state;
        return (
            <div>
              <Segment.Group vertical>
                <Segment style={{display:'grid', backgroundColor:'red'}}>
                  <Label style={{backgroundColor:'rgb(33, 133, 208)',color:'white'}}>Only First time choose airport from Dropdown and set it</Label>
                  <Button id='firstTime' onClick={this.iniEntryOfApplicationUser}  style={{marginTop:'1rem', backgroundColor:'aquamarine'}}>Set first time User of Application</Button>  
                </Segment>
                <Segment style={{backgroundColor:'aliceblue'}}>
                  <Label style={{marginBottom: '1rem', width:'100%', backgroundColor:'rgb(33, 133, 208)', color:'white'}}>Select Airport from DropBox</Label>
                      {airports? <select onChange={this.handleSelectChange} style={{marginBottom:'2rem',width:'100%'}}>
                        {airports.map((airport) => <option key={airport.id} value={airport.id}>{airport.name}</option>)}
                      </select> : ''}
                    <ModalInsertAirports
                      airport = {airport}
                      updateAirports = {this.updateAirports}
                    />
                </Segment>
                <Segment style={{backgroundColor: 'aliceblue', display:'flex'}}>
                  <Form onSubmit={this.getDataFromFormUserAirport}> 
                    <Label style={{width:'100%',color:'white',backgroundColor:'rgb(33, 133, 208)'}}>Company Info</Label> 
                    <TextArea id='description' placeholder='Describe your company!' style={{ minHeight: 100, marginTop:'1rem'}} /> 
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
                    </FormGroup>
                  </Form>  
                </Segment>
              </Segment.Group>
              <Segment>4
              </Segment>
              <Segment>3</Segment>
            </div>  
        )
    }
}



export default ApplicationSettings