import React from 'react'
import { Table } from 'semantic-ui-react'

const HomePageTableArrivals = () => (
  <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Flight</Table.HeaderCell>
        <Table.HeaderCell>From</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell>Arrived</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default HomePageTableArrivals;