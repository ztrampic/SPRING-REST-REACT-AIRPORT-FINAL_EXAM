import React from 'react';
import { Header,Menu,Input, Button} from 'semantic-ui-react';


const MojHeader = () =>(
<div>
<Header>
    <Menu pointing>
        <Menu.Item href='/' name='Home'/>
        <Menu.Item href='/aerodrom' name='Airports'/>
        <Menu.Item/>
        <Menu.Menu position='right'>
            <Menu.Item>
              <Input placeholder='Search Airport' />
            </Menu.Item>
            <Menu.Item>
                <Button>Search</Button>
            </Menu.Item>
            <Menu.Item>
                <Button style={{'backgroundColor':'red'}} href='/admin'>Login</Button>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
</Header>
</div>

)
export default MojHeader;