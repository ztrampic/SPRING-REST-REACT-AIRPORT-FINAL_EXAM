import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AirCompanyTabsStaffTable from './AirCompanyTabsStaffTable';
import { Grid, Segment, Form, Label } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment, { months } from 'moment';
import axios from 'axios';




export default class AirCompanyTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      dateForRequest: new Date(),
    };
    this.toggle = this.toggle.bind(this); 
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.sendFlightRequest = this.sendFlightRequest.bind(this)
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
    axios.post('http://localhost:8080/api/aircompany', dateForRequest)
    .then(res => {
      let numberOfTermins = res.data;
    })
    
  }

 

  render() {
   
    return (
      <div>
        <Nav tabs>
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
              Airports administration
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
             Flight administration
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
                        <Grid.Column width={8}>
                        <Form onSubmit={this.sendFlightRequest}>
                          <Form.Group>
                            <DatePicker
                                selected={this.state.dateForRequest}
                                onChange={this.handleChangeDate}
                                placeholderText={this.state.date}
                            />
                            <Button type='submit'></Button>
                          </Form.Group>
                        </Form>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Label>RESULT</Label>
                        </Grid.Column>
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
        </TabContent>
      </div>
    );
  }
}  