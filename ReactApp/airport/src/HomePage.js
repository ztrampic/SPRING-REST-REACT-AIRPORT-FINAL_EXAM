import React, { Component } from 'react'
import HomeImg from './resources/img/home.jpg'
import HomePageTableArrivals from './Components/HomePageTableArrivals';
import { Grid, GridColumn } from 'semantic-ui-react';
import HomePageTableDepartures from './Components/HomePageTableDepartures';





export class HomePage extends Component {
   constructor(props){
       super(props);
       this.state = {
           fiveArrivals:[],
           fiveDepartures:[],
       }
   }

   
  componentDidMount() {
    this.getFiveArrivalsAndFiveDepartures();
  }

   getFiveArrivalsAndFiveDepartures(){
       //Ovde selector za dovlacenje pet odlaska-dolaska u datom trenutku
   }

    
    render() {
        return (
            <div> 
            <img style={{width:'100%',marginBottom:'1rem'}} src ={HomeImg} alt={HomeImg}/>
            <Grid width={16}>
                <GridColumn width={8} style={{position:'absolute',left:'0',top:'20%', mixBlendMode: 'multiply'}}>
                    <HomePageTableArrivals /> 
                </GridColumn>
                <GridColumn width={8} style={{position:'absolute',right:'0',top:'20%', mixBlendMode: 'multiply'}}>
                    <HomePageTableDepartures />
                </GridColumn>
            </Grid>
            </div>
        )
    }
}

export default HomePage;

// 