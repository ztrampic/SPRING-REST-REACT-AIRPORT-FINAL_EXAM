import React, { Component } from 'react'
import HomeImg from './resources/img/home.jpg'
import HomePageTableArrivals from './Components/HomePageTableArrivals';
import { Grid, GridColumn, Select, Popup, Menu } from 'semantic-ui-react';
import HomePageTableDepartures from './Components/HomePageTableDepartures';
import moment from 'moment';
import { select } from './Helpers/DataUtilsHelper';
import _ from "lodash";

export class HomePage extends Component {
   constructor(props){
       super(props);
       this.state = {
           fiveArrivals:[],
           fiveDepartures:[],
           timeAndDate: new Date(),
       }
   }

   
  componentDidMount() {
  this.getFiveArrivalsAndFiveDepartures();
  }

   async getFiveArrivalsAndFiveDepartures(){
   const {timeAndDate} = this.state;
   let date = moment(timeAndDate).format('YYYY-MM-DD')
   let time = moment(timeAndDate).format('hh:mm')
   const data =  {departureDate:date,departureTime:time}
   await select('getFirstFiveDepartureFlights',data).then(res=>{
      let apiFlights = _.orderBy(res.data,['flightScheduleDTO.departureTime'],['asc']);
      this.setState({fiveDepartures:apiFlights}) 
   })
   }

    
    render() {
        const {fiveDepartures,fiveArrivals} = this.state;
        return (
            <div> 
            <img style={{width:'100%',marginBottom:'1rem'}} src ={HomeImg} alt={HomeImg}/>
            <Grid width={16}>
                <GridColumn width={6} style={{position:'absolute',left:'10%',top:'20%', mixBlendMode: 'hard-light'}}>
                    <Menu inverted style={{width:'fit-content',margin:'auto'}}>
                        <Menu.Item name='Arrivals'/>
                    </Menu>
                    <HomePageTableArrivals
                            fiveArrivals={fiveArrivals}
                        />
                </GridColumn>
                <GridColumn width={6} style={{position:'absolute',right:'10%',top:'20%', mixBlendMode: 'hard-light'}}>
                    <Menu inverted style={{width:'fit-content',margin:'auto'}}>
                        <Menu.Item name='Departures'/>
                    </Menu>
                    <HomePageTableDepartures 
                        fiveDepartures={fiveDepartures}
                    />
                </GridColumn>
            </Grid>
            </div>
        )
    }
}

export default HomePage;

// 