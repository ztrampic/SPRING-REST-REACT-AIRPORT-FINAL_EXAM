import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AirCompanyTabsStaffTable from './AirCompanyTabsStaffTable';
import { Grid, Segment, Form, Label, FormGroup, Input, Button, Table, Icon } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';
import AirCompanyTabsAirplaneTable from './AirCompanyTabsAirplaneTable';
import AirCompanyTabsAirportSearchTable from './AirCompanyTabsAirportSearchTable';




export default class AirCompanyTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      dateForRequest: new Date(),
      airportCityName:'',
      searchResultAirports:[],
    };
    this.toggle = this.toggle.bind(this); 
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.sendFlightRequest = this.sendFlightRequest.bind(this)
    this.searchAirportByAirportCity = this.searchAirportByAirportCity.bind(this)
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

  

  sendFlightRequest(){
    let {dateForRequest} = this.state;
    dateForRequest = moment(dateForRequest).format('DD-MM-YYYY')
    console.log("DATE", dateForRequest);
    
    axios.post('http://localhost:8080/api/airCompany', dateForRequest)
    .then(res => {
      const numberOfTermins = res.data;    //nije uradjeno
    })
    
  }

  searchAirportByAirportCity(){
    const airportCityName = document.getElementById('airportCityName').value;  
    console.log('CITYNAME',airportCityName);
    
    axios.post('http://localhost:8080/api/airport/searchByCity', airportCityName)
    .then(res => {
      const apiAirports = res.data;
      this.setState({searchResultAirports:apiAirports})  
    })
  }

 

  render() {
    const{ searchResultAirports
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
                <Card body>
                  <CardTitle>Provera Slobodnog leta za izabrani datum</CardTitle>
                    <Grid width={16}>
                      
                   </Grid>
                
                </Card>
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
                            id = ''
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
                        <Button color='blue' style={{width:'100%',marginTop:'1rem'}}>Insert</Button>{' '}                                        
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
                    <AirCompanyTabsAirplaneTable/>
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
                                <Table.HeaderCell>Destination Code</Table.HeaderCell>
                                <Table.HeaderCell>Date of Flight</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>   
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell id=''>YU097</Table.Cell>
                                <Table.Cell id=''>205</Table.Cell>
                                <Table.Cell id=''>1005 km</Table.Cell>
                                <Table.Cell id=''>Pennding</Table.Cell>
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