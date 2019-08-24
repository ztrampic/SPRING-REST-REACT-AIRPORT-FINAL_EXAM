import React from 'react';
import { Header,Menu,Input, Button, Form} from 'semantic-ui-react';



const MojHeader = () => {
    return (
        <div>
        <Header>
            <Menu pointing>
                <Menu.Item href='/' name='Home'/>
                <Menu.Item href='/aerodrom' name='Airports'/>
                <Menu.Item/>
                <Menu.Menu position='right'>
                <Form style={{display:'flex'}}>
                    <Menu.Item>   
                    <Input placeholder='Search Airport' />
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

export default MojHeader
