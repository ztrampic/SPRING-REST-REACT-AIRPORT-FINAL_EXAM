import React from 'react'
import { Table } from 'semantic-ui-react'

const AirCompanyFlightRequestsTable = ({flightRequests}) => {
    console.log("ASDASD",flightRequests);
    
    let tableFlights = flightRequests.map((flightReq)=>{
        return (
            <Table.Row>
                <Table.Cell>{flightReq.airplaneDTO.mark}</Table.Cell>
                <Table.Cell>{flightReq.destinationAirportDTO.name}</Table.Cell>
                <Table.Cell>{flightReq.datum}</Table.Cell>
                <Table.Cell>{flightReq.status}</Table.Cell>
            </Table.Row>        

        )
    });
    
    return (
        <div>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Airplane Mark</Table.HeaderCell>
                        <Table.HeaderCell>Destination</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {tableFlights}
                </Table.Body>
            </Table>
        </div>
    )
}

export default AirCompanyFlightRequestsTable
