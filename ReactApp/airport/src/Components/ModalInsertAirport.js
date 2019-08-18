import React from 'react';
import { FormGroup,Form , Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button} from 'semantic-ui-react';

class ModalInsertAirports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
          
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
         modal: !prevState.modal,
        
        }));
    }


    render() {
        return(
        <div>
            <Button onClick={this.toggle}>Insert</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>New Airport</ModalHeader>
              <ModalBody>
              <Form>
                <FormGroup>
                    <Label for="exampleEmail">City</Label>
                    <Input/>
                    <Label for="exampleEmail">Code</Label>
                    <Input/>
                    <Label for="exampleEmail">Country</Label>
                    <Input/>
                    <Label for="exampleEmail">Name</Label>
                    <Input/>
                </FormGroup>
               </Form>
              </ModalBody>
              <ModalFooter>
                <Button  onClick={this.toggle}>Insert New Airport</Button>{' '}
                <Button  onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </div>  
        )
    }
}

export default ModalInsertAirports;
