import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AirCompanyTabsStaffTable from './AirCompanyTabsStaffTable';
import { Grid, Segment, Form, Label, FormGroup, Input, Button, Table } from 'semantic-ui-react';
import AirCompanyTabsAirplaneTable from './AirCompanyTabsAirplaneTable';
import AirCompanyFlightRequestsTable from './AirCompanyFlightRequestsTable';
import { select } from '../../Helpers/DataUtilsHelper';
import ModalFlightRequest from '../modals/ModalFlightRequest';




export default class AirCompanyTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      airportCityName:'',
      airCompanyDTO:{},
      avion:{},
      airplanes:[],
      flightRequests:[],
      modalAddFlightRequestOpen:false,
    };
    this.toggle = this.toggle.bind(this); 
    this.insertAirplane = this.insertAirplane.bind(this)
    this.getAllAirplanes = this.getAllAirplanes.bind(this)
    this.loadAllApprovedFlights = this.loadAllApprovedFlights.bind(this)
    this.loadAllDeclinedFlights = this.loadAllDeclinedFlights.bind(this)
    this.loadAllPendingFlights = this.loadAllPendingFlights.bind(this)
    this.openModalFlightRequest = this.openModalFlightRequest.bind(this)
    this.closeModalFlightRequest = this.closeModalFlightRequest.bind(this)
    this.sendFlightRequest = this.sendFlightRequest.bind(this)
    this.deleteAirplane = this.deleteAirplane.bind(this)
  }

  componentDidMount(){
  }

  openModalFlightRequest(airplane){
    this.setState({avion:airplane})
    this.setState({modalAddFlightRequestOpen:true})
  }
  closeModalFlightRequest(){
    this.setState({modalAddFlightRequestOpen:false})
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  sendFlightRequest(airplane,destinationAirportDTO,description,datum){
   const airplaneDTO = airplane; 
   const data = {airplaneDTO,destinationAirportDTO,description,datum}
   select('insertNewFlyRequest',data)
    .then(res =>{
      const apiRes = res.status;
      if(apiRes === 200){
        this.setState({modalAddFlightRequestOpen:false})
      }
    })
  }

  insertAirplane(){
    const id = JSON.parse(sessionStorage.getItem('userAircompanyInfo'));
    console.log(id.idAirCompany,"STA JE OVO");
    const airCompanyDTO = {idAirCompany:id.idAirCompany}
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
  deleteAirplane(id){
   select('deleteAirplaneAndGetRest',id)
    .then(res=>{
      const apiRes = res.data;
      this.setState({airplanes:apiRes})
    })
    
  }


  getAllAirplanes(){
    const id = JSON.parse(sessionStorage.getItem('userAircompanyInfo'));
    select('getAllAirplanes', id.idAirCompany)
    .then(res=>{
      const apiAirplanes = res.data;
      this.setState({airplanes:apiAirplanes})
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
    const{ airplanes, flightRequests, modalAddFlightRequestOpen 
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
                      openModalFlightRequest = {this.openModalFlightRequest}
                      deleteAirplane = {this.deleteAirplane}
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={8} style={{marginTop: '1rem'}}>
                  <Segment>
                  </Segment>
                 
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
        <ModalFlightRequest 
              open={modalAddFlightRequestOpen}
              closeModalFlightRequest={this.closeModalFlightRequest}
              airplane = {this.state.avion}
              sendFlightRequest = {this.sendFlightRequest}
              />
      </div>
    );
  }
}  