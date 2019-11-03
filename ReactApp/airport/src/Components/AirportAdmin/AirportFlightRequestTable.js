import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import '../../Css/blink_me.css'
import deleteFlightRequest from '../../apiSelectors/flightRequest/DeleteFlightRequest';

const AirportFlightRequestTable = ({flightRequests,openFlightModal,deleteFlightRequest}) => {
    
    
    let tableFlights = flightRequests.map((flightReq)=>{
        return (
            <Table.Row>
                <Table.Cell>{flightReq.idFR}</Table.Cell>
                <Table.Cell>{flightReq.airplaneDTO.mark}</Table.Cell>
                <Table.Cell>{flightReq.destinationAirportDTO.name}</Table.Cell>
                <Table.Cell>{flightReq.datum}</Table.Cell>
                {flightReq.status === "PENDING"? <Table.Cell><span className="blink_me">{flightReq.status}</span></Table.Cell> : <Table.Cell><span className="blink_me_aproved">{flightReq.status}</span></Table.Cell>}
                <Table.Cell>
                {flightReq.status === "APROVED" || flightReq.status ==="DECLINED"?  
                    <span style={{height:'1px'}}>
                        <Button disabled={true} size="tiny" style={{backgroundColor:'#21ba45',color:'white'}} onClick={()=>openFlightModal(flightReq)}>Check</Button>
                    </span>
                     : 
                    <span style={{height:'1px'}}>
                        <Button size="tiny" style={{backgroundColor:'#21ba45',color:'white'}} onClick={()=>openFlightModal(flightReq)}>Check</Button>
                    </span>}
                    <span>
                        <Button onClick={()=>deleteFlightRequest(flightReq.idFR)} size="tiny" style={{backgroundColor:'red',color:'white'}}>Delete</Button>
                    </span>
                </Table.Cell>
            </Table.Row>        

        )
    });

    return (
        <div>
            <Table celled fixed singleLine style={{textAlign:'center'}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="1">Id</Table.HeaderCell>
                        <Table.HeaderCell width="2">Mark</Table.HeaderCell>
                        <Table.HeaderCell width="4">Destination</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell width="4">Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                   {tableFlights}
                </Table.Body>
            </Table>
        </div>
    )
}

export default AirportFlightRequestTable
