import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AirCompanyTabsStaffTable from './AirCompanyTabsStaffTable';
import { Grid, Segment, Form, Label, FormGroup, Input, Button, Table } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import AirCompanyTabsAirplaneTable from './AirCompanyTabsAirplaneTable';
import AirCompanyTabsAirportSearchTable from './AirCompanyTabsAirportSearchTable';
import AirCompanyFlightRequestsTable from './AirCompanyFlightRequestsTable';
import { select } from '../../Helpers/DataUtilsHelper';




export default class AirCompanyTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      dateForRequest: new Date(),
      airportCityName:'',
      searchResultAirports:[],
      airCompanyDTO:{},
      avion:{},
      airplanes:[],
      flightRequests:[],
    };
    this.toggle = this.toggle.bind(this); 
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.sendFlightRequest = this.sendFlightRequest.bind(this)
    this.searchAirportByAirportCity = this.searchAirportByAirportCity.bind(this)
    this.insertAirplane = this.insertAirplane.bind(this)
    this.getAllAirplanes = this.getAllAirplanes.bind(this)
    this.loadAllApprovedFlights = this.loadAllApprovedFlights.bind(this)
    this.loadAllDeclinedFlights = this.loadAllDeclinedFlights.bind(this)
    this.loadAllPendingFlights = this.loadAllPendingFlights.bind(this)
  }

  componentDidMount(){
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleChangeDate = date => {
    this.setState({
      dateForRequest: date
    })
  }

  insertAirplane(){
    const airCompanyDTO = {idAirCompany:"1"}
    const mark = document.getElementById('mark').value;
    const seatingCapacity = document.getElementById('numberOfSeats').value;
    const maxFlyDistance = document.getElementById('maxFlyDistance').value;
    const avion = {airCompanyDTO, mark, seatingCapacity, maxFlyDistance}
    select('insertNewAirplane', avion)
    .then(res=>{
      const api = res.data;
      window.location.reload();
    })
    
  }

  getAllAirplanes(){
    const id = 1;
    select('getAllAirplanes', id)
    .then(res=>{
      const apiAirplanes = res.data;
      this.setState({airplanes:apiAirplanes})
    })
  }

  sendFlightRequest(){
    let {dateForRequest} = this.state;
    dateForRequest = moment(dateForRequest).format('DD-MM-YYYY')
    console.log("DATE", dateForRequest);
    select('dateForRequest', dateForRequest)
    .then(res => {
      const numberOfTermins = res.data;    //nije uradjeno
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

  loadAllApprovedFlights(){
    select('getApprovedFlights')
    .then(res => {
      const apiFlightRequests = res.data;
      this.setState({flightRequests:apiFlightRequests})  
    })
  }

  loadAllDeclinedFlights(){
   select('getDeclinedFlightRequests')
    .then(res => {
      const apiFlightRequests = res.data;
      this.setState({flightRequests:apiFlightRequests})  
    })
  }
  loadAllPendingFlights(){
   select('getPendingFlightRequests')
    .then(res => {
      const apiFlightRequests = res.data;
      this.setState({flightRequests:apiFlightRequests})  
    })
  }

 

  render() {
    const{ searchResultAirports, airplanes, flightRequests 
     } = this.state
   
    return (
      <div>
        <Nav tabs style={{background: 'aliceblue', cursor:' pointer'}}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Employees
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Flights Administration
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
             Ticket administration
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
             Fleet and Flight Request Administration
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                  <AirCompanyTabsStaffTable>
                </AirCompanyTabsStaffTable>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Pretraga aerodroma na kojima smo korisnici</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
              <Segment.Group>
                <Segment>
                  <Button onClick={this.loadAllApprovedFlights}>Load All Approved</Button>
                  <Button onClick={this.loadAllDeclinedFlights}>Load All Declined</Button>
                  <Button onClick={this.loadAllPendingFlights}>Load All Pending</Button>
                </Segment>
                <Segment>
                  <AirCompanyFlightRequestsTable
                      flightRequests={flightRequests}
                  /> 
                </Segment>
              </Segment.Group>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                  <Grid  width={16}>
                      <Grid.Column width={8}>
                          <Segment>
                          </Segment>
                      </Grid.Column>
                      <Grid.Column width={8}>
                          <Segment>
                          </Segment>
                      </Grid.Column>
                  </Grid>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <Grid  width={16}>
                <Grid.Column width={8}>
                  <Segment.Group horizontal>
                    <Segment style={{backgroundColor:'aliceblue'}}>
                      <Label style={{display:'flex', color:'white', background:'#2185d0'}}>Airplane Registration</Label>  
                      <Form>
                        <FormGroup style={{margin:0, display:'inline'}}>
                        <Input type='hidden'/>
                        <Input
                            required
                            style={{display:'grid',marginTop:'1rem'}} 
                            name = ''
                            label ='Mark of airplane' size='mini'
                            id = 'mark'
                            />
                        <Input 
                            required
                            style={{display:'grid',marginTop:'1rem'}} 
                            name = 'numberOfSeats'
                            label ='Max passangers' size='mini'
                            type = 'number'
                            id = 'numberOfSeats'
                            />
                        <Input
                            required
                            style={{display:'grid',marginTop:'1rem'}}  
                            name = 'maxDistance'
                            type = 'number'
                            label='Max fly distance' size='mini'
                            id = 'maxFlyDistance'
                            />   
                        <Button onClick={this.insertAirplane} color='blue' style={{width:'100%',marginTop:'1rem'}}>Insert</Button>{' '}                                        
                        </FormGroup> 
                      </Form>
                    </Segment>
                    <Segment>
                      213123123123
                    </Segment>
                    <Segment>
                      213123123123
                    </Segment>
                  </Segment.Group>
                  <Segment>
                  <Button onClick={this.getAllAirplanes} color='blue' style={{width:'50%%',marginBottom:'1rem',backgroundColor:'black'}}>Get All Airplanes</Button>{' '} 
                    <AirCompanyTabsAirplaneTable
                      airplanes = {airplanes}
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8} style={{marginTop: '1rem'}}>
                  <Segment>
                  <Label style={{display:'flex', color:'white', background:'#2185d0'}}>Flight check with departure Airport</Label>
                    <Form onSubmit={this.sendFlightRequest} style={{paddingTop:'1rem'}}>
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
                  <Segment.Group>
                    <Segment>                    
                      <Label style={{marginBottom:'1rem', display:'flex', color:'white', background:'#2185d0'}}>Search airport city destination</Label>
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
                  </Segment.Group>
                  <Segment>
                  <Label style={{display:'flex', color:'white', background:'#2185d0'}}>New Request for Flight</Label>
                    <Table striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Airplane Mark</Table.HeaderCell>
                                <Table.HeaderCell>Airport Name</Table.HeaderCell>
                                <Table.HeaderCell>Date of Flight</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell id=''>YU097</Table.Cell>
                                <Table.Cell id=''>Canada</Table.Cell>
                                <Table.Cell id=''>10/12/2019</Table.Cell>
                            </Table.Row>
                        </Table.Body>    
                      </Table>
                  </Segment>
                </Grid.Column>          
              </Grid>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}  