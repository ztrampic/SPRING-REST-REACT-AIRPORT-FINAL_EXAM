import React from 'react'
import { Table, Button } from 'semantic-ui-react'

function AirCompanyTabsAirplaneTable() {

   
    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Mark</Table.HeaderCell>
                        <Table.HeaderCell>Max passangers</Table.HeaderCell>
                        <Table.HeaderCell>Max fly distance</Table.HeaderCell>
                        <Table.HeaderCell>Add to Flight</Table.HeaderCell> 
                        <Table.HeaderCell>Action</Table.HeaderCell>   
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell id='1' value={'pera'}>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                        
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell><Button color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
                        <Table.Cell><Button color='red' style={{fontSize:'smaller'}}>Delete</Button></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default AirCompanyTabsAirplaneTable
