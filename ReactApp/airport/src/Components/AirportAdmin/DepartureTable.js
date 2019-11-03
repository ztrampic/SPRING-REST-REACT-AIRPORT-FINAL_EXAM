import React from 'react'
import { Table } from 'semantic-ui-react'

const DepartureTable = ({flights}) => {

    let flight = flights.map((flight)=>{
        return (
            <Table.Row>
                <Table.Cell>{flight.id}</Table.Cell>
                <Table.Cell>{flight.flightNumber}</Table.Cell>
                <Table.Cell>{flight.arrivalAirportDTO.code}</Table.Cell>
                <Table.Cell>{flight.arrivalAirportDTO.city}</Table.Cell>
                <Table.Cell>{flight.flightScheduleDTO.departureTime}</Table.Cell>
                <Table.Cell>{flight.flightScheduleDTO.arrivalTime}</Table.Cell>
                <Table.Cell>{flight.airCompanyDTO.internationalName}</Table.Cell>
            </Table.Row>        

        )
    });

    return (
        <div style={{overflowY:'scroll'}}>
            <Table celled fixed singleLine style={{textAlign:'center',fontSize:'11px'}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="2">Id</Table.HeaderCell>
                        <Table.HeaderCell width="2">Mark</Table.HeaderCell>
                        <Table.HeaderCell width="3">Destination</Table.HeaderCell>
                        <Table.HeaderCell width="3">City</Table.HeaderCell>
                        <Table.HeaderCell width="3">Dep. Time</Table.HeaderCell>
                        <Table.HeaderCell width="3">Arr. Time</Table.HeaderCell>
                        <Table.HeaderCell width="3">Aircompany</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {flight}
                </Table.Body>
            </Table>
        </div>
    )
}

export default DepartureTable