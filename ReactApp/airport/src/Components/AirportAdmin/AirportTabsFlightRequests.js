import React from 'react'
import { Table, Button, Label } from 'semantic-ui-react'


function AirportTabsFlightRequests() {

   
    return (
        <div>
            <Label>Active Requests</Label>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>AirCompany</Table.HeaderCell>
                        <Table.HeaderCell>Airplane</Table.HeaderCell>
                        <Table.HeaderCell>Airport destination</Table.HeaderCell>
                        <Table.HeaderCell>Date Departure</Table.HeaderCell> 
                        <Table.HeaderCell>Action</Table.HeaderCell>   
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell id='1' value={'pera'}>AirSerbia</Table.Cell>
                        <Table.Cell>YU096</Table.Cell>
                        <Table.Cell>Hitrou</Table.Cell>
                        <Table.Cell>12.09.2019</Table.Cell>
                        <Table.Cell>
                            <Button color='green' style={{fontSize:'smaller'}}>Approve</Button>
                            <Button color='red' style={{fontSize:'smaller'}}>Decline</Button>
                        </Table.Cell>
                        
                    </Table.Row>
                   
                </Table.Body>
            </Table>
        </div>
    )
}

export default AirportTabsFlightRequests
