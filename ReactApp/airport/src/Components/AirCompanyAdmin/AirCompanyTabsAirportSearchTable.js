import React from 'react'
import { Table, Button } from 'semantic-ui-react'

function AirCompanyTabsAirportSearchTable({searchResultAirports}) {
    
    let searchResult = searchResultAirports.map((airport)=>{
        return (
            <Table.Row>
                <Table.Cell>{airport.airportDTO.code}</Table.Cell>
                <Table.Cell>{airport.airportDTO.country}</Table.Cell>
                <Table.Cell>{airport.airportDTO.city}</Table.Cell>
                <Table.Cell>{airport.airportDTO.name}</Table.Cell>
                <Table.Cell>{airport.distance} KM</Table.Cell>
                <Table.Cell><Button id = {airport.id} color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell>
            </Table.Row>        

        )
    });
    return (  
        <div style={{height:"200px", overflowY:'scroll'}}>
            <Table striped>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Code</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Distance</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    {searchResult}
                </Table.Body>  
            </Table>
        </div>
    )
}

export default AirCompanyTabsAirportSearchTable
