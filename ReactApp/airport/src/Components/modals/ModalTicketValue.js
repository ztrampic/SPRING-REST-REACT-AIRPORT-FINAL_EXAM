import React, { Component } from 'react'
import { Button, Modal, Form, Table } from 'semantic-ui-react'

let ticketValues = {};

const ModalTicketValue = ({ open, close, ticketTypes, formSubmit, idFlight, apiTicketValues }) => {
    ticketValues = { idFlight };
    let handleChangeSelect = ((e, { value }) =>{ticketValues = { ...ticketValues,value };})
    let handleChange = ((e, { price = e.target.value }) =>{ ticketValues = { ...ticketValues,price };})

    const rows = apiTicketValues.map(apiTicketValue=>{
        return <Table.Row>
                    <Table.Cell>{apiTicketValue.id}</Table.Cell>
                    <Table.Cell>{apiTicketValue.value}</Table.Cell>
                    <Table.Cell>{apiTicketValue.price}</Table.Cell>
                    <Table.Cell><Button>Delete</Button></Table.Cell>
                </Table.Row>
             })

    const dropOptions = ticketTypes.map(ticketType => {
        return { text: ticketType, key: ticketType, value: ticketType };
    })
    return (
        <div>
            <Modal open={open} style={{ width: '35%', height: '600px', position: 'initial' }}>
                <Modal.Header style={{ height: '10%', color:'white',backgroundColor:'#2185d0' }}><span>Add price of ticket for flight</span></Modal.Header>
                <Modal.Content>
                    <Form onSubmit={() => formSubmit(ticketValues)}>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label='Type'
                                options={dropOptions}
                                placeholder='Type of ticket'
                                onChange = {handleChangeSelect}
                            />
                             <Form.Input
                                type = 'number'
                                onChange = {handleChange}  
                                fluid label='Price' placeholder='Price' /> 
                        </Form.Group>
                        <Button>Add new Ticket Value</Button>
                    </Form>
                    <Table color='blue' celled inverted selectable>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.Body>
                            {rows}
                        </Table.Body>
                    </Table>
                </Modal.Content>
                <Modal.Actions style={{ width: '100%', position: 'absolute', right: '0', bottom: '0' }}>
                    <Button onClick={close} style={{color:'white',backgroundColor:'#2185d0'}}> Close </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default ModalTicketValue

 {/* <Dropdown
                                    placeholder='Select class'
                                    fluid
                                    selection
                                    options = {dropOptions}
                                    onChange = {handleChange}
                                />
                                <Input/>
                                <Input/>
                                <Input/>
                                <Button type="submit">?</Button> */}