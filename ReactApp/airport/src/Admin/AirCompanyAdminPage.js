import React, { Component } from 'react'
import { Grid, Segment, Menu, Button } from 'semantic-ui-react';
import AirCompanyTabs from '../Components/AirCompanyAdmin/AirCompanyTabs';
import { getAuthUserFromSessionStorage } from '../Helpers/AuthHelper';
import { select } from '../Helpers/DataUtilsHelper';


export class AirCompanyAdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             airCompany:{},
             flightList:[],
             showingAirportTable:false,
        }
    }
    componentDidMount(){
       const user = getAuthUserFromSessionStorage()
       this.getAirCompanyInfo(user.userId)
    }

    getAirCompanyInfo(id){
        select('getAirCompanyInfo',id)
            .then(res => {
                let result = res.data;
                console.log(result); 
                sessionStorage.setItem('userAircompanyInfo', JSON.stringify(result));
                this.setState({airCompany:result})
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>AIRCOMPANY ADMIN</h1>
                </div>
                <Grid columns={1}>
                    <Grid.Column>
                        <Grid.Row>
                            <Segment style={{width:'100%'}}>
                                <AirCompanyTabs/>
                            </Segment>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment style={{backgroundColor: 'aliceblue', display:'flex'}}>
                                <Menu style={{display:'contents'}}>
                                    <Menu.Item>
                                        <Button color="blue">Airports</Button>{' '}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button color="blue">Personel</Button>{' '}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button color="blue">Flights</Button>{' '}
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button color="blue">Tickets</Button>{' '}
                                    </Menu.Item>
                                </Menu>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>             
                            <Segment style={{backgroundColor:'aliceblue'}}> 2
                            </Segment>          
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
            </div>
        )
    }
}
export default AirCompanyAdminPage;
