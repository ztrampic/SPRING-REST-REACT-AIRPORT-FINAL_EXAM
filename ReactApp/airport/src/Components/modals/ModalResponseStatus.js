import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalResponseStatus = ({ open, close, status }) => {
    switch(status){
        case 200 :
                return (
                    <div>
                        <Modal open={open} style={{ width: '35%', height: '200px', position: 'initial' }}>
                            <Modal.Header style={{height:'25%'}}><span>Success</span></Modal.Header>
                            <Modal.Content><span>Your request was successfully completed..</span></Modal.Content>
                            <Modal.Actions>
                                <Button onClick={close} color='green'> Ok </Button>
                            </Modal.Actions>        
                        </Modal>
                    </div>
                )
        default:
            return (
                <div>
                </div>
            )        
    }
    
}

export default ModalResponseStatus
