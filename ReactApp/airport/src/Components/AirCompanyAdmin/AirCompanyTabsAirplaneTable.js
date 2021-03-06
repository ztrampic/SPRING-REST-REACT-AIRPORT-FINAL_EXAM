import React from 'react'
import { Table, Button } from 'semantic-ui-react'

function AirCompanyTabsAirplaneTable({airplanes,openModalFlightRequest,deleteAirplane}) {
   
    let allAirplanes = airplanes.map((airplane)=>{
        return (
            <Table.Row>
                <Table.Cell>{airplane.mark}</Table.Cell>
                <Table.Cell>{airplane.seatingCapacity}</Table.Cell>
                <Table.Cell>{airplane.maxFlyDistance}</Table.Cell>
                <Table.Cell>
                    <Button onClick={()=>openModalFlightRequest(airplane)} id = {airplane.idAirplane} color='green' style={{fontSize:'smaller'}}>Add</Button>
                    <Button onClick={()=>deleteAirplane(airplane.idAirplane)} color='red' style={{fontSize:'smaller'}}>Delete</Button>
                </Table.Cell>
            </Table.Row>        

        )
    });
   
    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Mark</Table.HeaderCell>
                        <Table.HeaderCell>Max passangers</Table.HeaderCell>
                        <Table.HeaderCell>Max fly distance</Table.HeaderCell>
                        <Table.HeaderCell>Add to Flight</Table.HeaderCell> 
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                   {allAirplanes}
                </Table.Body>
            </Table>
        </div>
    )
}

export default AirCompanyTabsAirplaneTable
