import React, { Component } from 'react'
import DropDownAirports from '../Components/DropDownAirports';
import { Grid, Segment, Button } from 'semantic-ui-react';
import ModalInsertAirports from '../Components/ModalInsertAirport';
import axios from 'axios';


export class AdminHomePage extends Component {
    constructor(props){
        super(props)
    this.state = {
        airports: [],
    }        
}

// componentDidMount(){
//    axios.get('https://localhost:8080/api/airport/getAllAirports')
//    .then(res => {
//        const persons = res.data;
//        this.setState({persons});
//    })
// }

    render() {
        return (
          <div>
              <div>
                  <h1>AdminHomePage</h1>
              </div>
            <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment>1
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                    <div>
                        <DropDownAirports></DropDownAirports>
                    </div>
                </Segment>
                <Segment>
                    <div style={{'display': 'flex'}}>
                    <ModalInsertAirports></ModalInsertAirports>
                    <div><Button>Update</Button></div>
                    <div><Button>Delete</Button></div>
                    </div>
                </Segment>
                <Segment>3</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>   
        )
    }
}

export default AdminHomePage;
