import React from 'react'
import { Table, Button } from 'semantic-ui-react'

function AirportAdminSearchAirlines({searchResultAirCompanys}) {
    
    let searchResult = searchResultAirCompanys.map((airCompany)=>{
        return (
            <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                {/* <Table.Cell><Button id = {airport.id} color='green' style={{fontSize:'smaller'}}>Add</Button></Table.Cell> */}
            </Table.Row>        

        )
    });
    return (  
        <div>
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
                    {/* {searchResult} */}
                </Table.Body>  
            </Table>
        </div>
    )
}

export default AirportAdminSearchAirlines