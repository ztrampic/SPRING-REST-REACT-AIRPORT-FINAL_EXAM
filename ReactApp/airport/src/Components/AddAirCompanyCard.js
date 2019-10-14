import React, { Component } from 'react'
import { Input, Form, Label, Segment, SegmentGroup, Button, Modal } from 'semantic-ui-react'
import AirportAdminSearchAirlines from './AirportAdmin/AirportAdminSearchAirlines'
import { select } from '../Helpers/DataUtilsHelper'
import ModalResponseStatus from './modals/ModalResponseStatus'

export default class AddAirCompanyCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResultAirCompanys: [],
            userOfApplicationData:{},
            modalResponseStatus:false,
            status:'',
        }
        this.searchAirCompanyByName = this.searchAirCompanyByName.bind(this)
        this.addUserAirCompany = this.addUserAirCompany.bind(this)
        this.closeModalResponseStatus = this.closeModalResponseStatus.bind(this)
    }
componentDidMount(){
    this.getUserAirportData();
}
closeModalResponseStatus(){
    this.setState({modalResponseStatus:false})
}

getUserAirportData(){
    const  idUserAirport = 1;
    select('getUserOfAppInfoAdmin',idUserAirport)
      .then(res => {  
        let userAirportDataApi = res;   
        this.setState({ userOfApplicationData : userAirportDataApi });      
      })   
   }

searchAirCompanyByName(){
    const airCompanyName = document.getElementById('airCompanyName').value;  
    select('searchAirCompanyByName',airCompanyName)
    .then(res => {
      const apiAirCompanys = res.data;
      this.setState({searchResultAirCompanys:apiAirCompanys}) 
    })
}
addUserAirCompany(id){
    const{userOfApplicationData} = this.state
    console.log("USER",userOfApplicationData.data.airportDTO);
    console.log("USER",id);
    const AirportAdminSearchDTO  = {airportDTO:userOfApplicationData.data.airportDTO,distance:id}
    console.log(AirportAdminSearchDTO);
    
    select('insertAirCompanyUser', AirportAdminSearchDTO )
    .then(res => {
        const resStatus = res.status;
           this.setState({modalResponseStatus:true,status:resStatus})
      
    })
}

    render() {
        const { searchResultAirCompanys, modalResponseStatus, status } = this.state;

        return (
            <div><ModalResponseStatus status={status} open={modalResponseStatus} close={this.closeModalResponseStatus}></ModalResponseStatus>
            <SegmentGroup horizontal>
                <Segment style={{ width:'80%',backgroundColor:'aliceblue', display:'inline'}}>
                    <Label style={{top:'0', left:'0', color:'white', backgroundColor:'#2185d0', position:'absolute',width:'100%',textAlign:'center'}}>Search Aircompany from Database </Label>
                    <Form onSubmit={this.searchAirCompanyByName} style={{margin:'auto',marginBottom:'1rem',marginTop:'2rem',display:'flex'}}>
                        <Input
                            id='airCompanyName'
                            minLength={5}
                            required
                            icon={{ name: 'search', circular: true }}
                            placeholder='Search...'
                        />
                        <Button style={{ marginLeft: '1rem', backgroundColor:'#21ba45', color:'white'}}>Search</Button>
                    </Form>
                    <AirportAdminSearchAirlines
                        searchResultAirCompanys = {searchResultAirCompanys}
                        addUserAirCompany = {this.addUserAirCompany}
                        />
                </Segment>
                <Segment style={{ width: '20%', backgroundColor: 'aliceblue', display: 'grid' }}>
                    <Label style={{ color:'white', backgroundColor:'#2185d0', position: 'absolute', width: '100%', textAlign: 'center' }}>New Aircompany</Label>
                    <Form style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'grid' }}>
                            <Label size={"mini"} style={{ color: 'white', backgroundColor: '#2185d0' }}>Aircompany Name</Label>
                            <Input required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label size={"mini"} style={{ color: 'white', backgroundColor: '#2185d0' }}>Country</Label>
                            <Input required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label size={"mini"} style={{ color: 'white', backgroundColor: '#2185d0' }}>Mark</Label>
                            <Input required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Label size={"mini"} style={{ color: 'white', backgroundColor: '#2185d0' }}>Int-Name</Label>
                            <Input required focus size={"mini"} style={{ marginBottom: '1rem' }}></Input>
                            <Button size={"mini"} style={{ backgroundColor: '#21ba45', color: 'white' }}>Insert</Button>
                        </div>
                    </Form>
                </Segment>
            </SegmentGroup>
            </div>
        )
    }
}
