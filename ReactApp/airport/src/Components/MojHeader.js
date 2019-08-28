import React, { Component} from 'react'
import { Header,Menu,Input, Button, Form} from 'semantic-ui-react';



export class MojHeader extends Component {
   
    render() {
        return (
            <div>       
            <Header>
                <Menu pointing style={{backgroundColor:'#6351ce'}}>
                    <Menu.Item href='/home' name='Home'/>
                    <Menu.Item href='/aerodrom' name='Airports'/>
                    <Menu.Item/>
                    <Menu.Menu position='right'>
                    <Form style={{display:'flex'}}>
                        <Menu.Item>   
                        <Input placeholder='Search Flight' />
                        </Menu.Item>
                        <Menu.Item>
                            <Button>Search</Button>
                        </Menu.Item>
                    </Form>
                        <Menu.Item>
                            <Button style={{'backgroundColor':'red'}} href='/admin'>Login</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Header>
            </div>
        )
    }
}

export default MojHeader;

