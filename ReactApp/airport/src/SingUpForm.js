import React from 'react'
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import { select } from './Helpers/DataUtilsHelper'

class SingUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            singUpDTO:{}
        }
        this.singUpFunction = this.singUpFunction.bind(this)
    }

singUpFunction(){
    const name  = document.getElementById('name').value;
    const lastname  = document.getElementById('lastName').value;
    const email  = document.getElementById('email').value;
    const username  = document.getElementById('username').value;
    const password  = document.getElementById('password').value;
    const phonenumber  = document.getElementById('phone').value;
    const singUpDTO={name,lastname,email,username,password,phonenumber}
    select('userSingUp',singUpDTO)
      .then((response)=>{
       
   })
}

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh',backgroundColor:'red' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                  Fill Fields
              </Header>
              <Form size='large' onSubmit={this.singUpFunction}>
                <Segment stacked>
                  <Form.Input id='name' minLength='3' required fluid icon='user' iconPosition='left' placeholder='First name' />
                  <Form.Input id='lastName' minLength='3' required fluid icon='user' iconPosition='left' placeholder='Last name' />
                  <Form.Input id='email' required type='Email' fluid icon='envelope outline' iconPosition='left' placeholder='E-mail' />
                  <Form.Input id='username' required fluid icon='user' iconPosition='left' placeholder='Username' />
                  <Form.Input id='password' minLength='6' required fluid icon='user' iconPosition='left' placeholder='Password' />
                  <Form.Input id='phone' required fluid icon='phone' iconPosition='left' placeholder='Phone number' />
                  <Button color='teal' fluid size='large'>
                    Sing Up
                  </Button>
                </Segment>
              </Form>
              <Message>
              </Message>
            </Grid.Column>
          </Grid>
        );
    }
}


 


export default SingUpForm