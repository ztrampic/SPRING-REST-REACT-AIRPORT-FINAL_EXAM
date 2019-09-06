import React, { Component} from 'react'
import { Header,Menu,Input, Button, Form} from 'semantic-ui-react';



export class MojHeader extends Component {
   constructor(){
       super()
       this.state = {
           time:new Date()
       }
   }

   currentTime(){
       this.setState({
           time:new Date()
       })
   }
   componentWillMount(){
       setInterval(() => this.currentTime(), 1000)
   }
    render() {
        return (
            <div>       
            <Header>
                <Menu pointing style={{backgroundColor:'#6351ce'}}>
                    <Menu.Item href='/home' name='Home'/>
                    <Menu.Item href='/aerodrom' name='Airports'/>
                    <Menu.Item name={this.state.time.toLocaleTimeString()}/>
                    {/* // .replace(/:\d\d([ ap]|$)/,'$1')   samo sati i minuti   */}
                    <Menu.Menu position='right'>
                    <Form style={{display:'flex'}}>
                        <Menu.Item>   
                        <Input placeholder='Search Flyth'/>
                        </Menu.Item>
                        <Menu.Item>
                            <Button href = '/airCompanyAdmin'>Temp Admin AirCompany</Button>
                        </Menu.Item>
                    </Form>
                        <Menu.Item>
                            <Button style={{'backgroundColor':'red'}} href='/admin'>Temp Admin</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Header>
            </div>
        )
    }
}

export default MojHeader;

