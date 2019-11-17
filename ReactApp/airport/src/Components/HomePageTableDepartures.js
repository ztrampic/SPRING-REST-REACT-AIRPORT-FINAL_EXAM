import React from 'react'
import { Table } from 'semantic-ui-react'

const HomePageTableDepartures = ({ fiveDepartures }) => {

  let flight = fiveDepartures.map((flight) => {
    return (
      <Table.Row>
        {/* <Table.Cell>{flight.id}</Table.Cell> */}
        <Table.Cell>{flight.arrivalAirportDTO.city}</Table.Cell>
        <Table.Cell>{flight.flightNumber}</Table.Cell>
        <Table.Cell>{flight.flightScheduleDTO.departureTime}</Table.Cell>
        <Table.Cell>{flight.airCompanyDTO.internationalName}</Table.Cell>
        <Table.Cell>{flight.flightScheduleDTO.status}</Table.Cell>
        {/* <Table.Cell>{flight.flightScheduleDTO.arrivalTime}</Table.Cell> */}
      </Table.Row>

    )
  });
  return (
    <Table celled inverted selectable style={{textAlign:'center',marginTop:'3px'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Destination</Table.HeaderCell>
          <Table.HeaderCell>Flight Nº</Table.HeaderCell>
          <Table.HeaderCell>Scheduled</Table.HeaderCell>
          <Table.HeaderCell>Airlines</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {flight}
      </Table.Body>
    </Table>
  )
}
export default HomePageTableDepartures;
