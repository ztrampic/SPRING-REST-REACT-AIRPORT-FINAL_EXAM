import React from 'react'
import { Table, Button } from 'semantic-ui-react'


function AirportAirCompanyUsers({airCompanies,addAdminToggle,deleteAirportFromUserList}) {
    //da stignu metode za batone
    let searchResult = airCompanies.map((airCompany)=>{
        return (
            <Table.Row>
                <Table.Cell>{airCompany.name}</Table.Cell>
                <Table.Cell>{airCompany.country}</Table.Cell>
                <Table.Cell>{airCompany.mark}</Table.Cell>
                <Table.Cell>{airCompany.internationalName}</Table.Cell>
                <Table.Cell>
                    <Button id = {airCompany.idAirCompany} style={{fontSize:'smaller', backgroundColor:'#21ba45',color:'white'}}>Edit</Button>
                    <Button onClick={()=>deleteAirportFromUserList(airCompany.idAirCompany)} id = {airCompany.idAirCompany} style={{fontSize:'smaller', backgroundColor:'#dc3545',color:'white'}}>Delete</Button> 
                </Table.Cell>
                <Table.Cell>
                    <Button onClick={()=>addAdminToggle(airCompany.idAirCompany)} id = {airCompany.idAirCompany} style={{fontSize:'smaller', backgroundColor:'#2185d0',color:'white'}}>Add</Button>
                </Table.Cell>
            </Table.Row>        

        )
    });
    return (  
        <div style={{   maxHeight:'600px',overflowY:'scroll'}}>
            <Table striped>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.HeaderCell>Mark</Table.HeaderCell>
                    <Table.HeaderCell>International Name</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                    <Table.HeaderCell>Add Admin</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                    {searchResult}
                </Table.Body>  
            </Table>
        </div>
    )
}

export default AirportAirCompanyUsers