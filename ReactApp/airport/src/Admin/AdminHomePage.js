import React, { Component } from 'react'
import { Grid, Segment} from 'semantic-ui-react';

import AirportTabs from '../Components/AirportAdmin/AirportTabs';





export class AdminHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  componentDidMount() {
  }  

  render() {
    return (
      <div>
        <div>
          <h1>AdminHomePage {}</h1>
        </div>
        <Grid columns={2} divided>
            <Grid.Column style={{width:'90%'}}>
              <Segment>
                <AirportTabs></AirportTabs>   
              </Segment>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default AdminHomePage;
