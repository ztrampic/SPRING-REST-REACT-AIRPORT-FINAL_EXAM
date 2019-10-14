import React from 'react'
import { Button, Form, Grid, Message, Segment} from 'semantic-ui-react'
import { select } from './Helpers/DataUtilsHelper'
import HomeImg from './resources/img/home.jpg'

class SingUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            singUpDTO:{}
        }
        this.singUpFunction = this.singUpFunction.bind(this)
    }

singUpFunction(){
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phonenumber = document.getElementById('phone').value;
    const singUpDTO={name,lastname,email,username,password,phonenumber}
    select('userSingUp',singUpDTO)
      .then((response)=>{
       
   })
}

    render() {
        return (
          <div>
          <img style={{position:'absolute', width:'100%',marginBottom:'1rem',height:'59%'}} src ={HomeImg} alt={HomeImg}/>
            <Grid textAlign='center' style={{ height: '60vh',backgroundColor:'red' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size='large' onSubmit={this.singUpFunction}>
                <Segment stacked>
                  <Form.Input id='name' minLength='3' required fluid icon='user' iconPosition='left' placeholder='First name' />
                  <Form.Input id='lastName' minLength='3' required fluid icon='user' iconPosition='left' placeholder='Last name' />
                  <Form.Input id='email' required type='Email' fluid icon='envelope outline' iconPosition='left' placeholder='E-mail' />
                  <Form.Input id='username' required fluid icon='user' iconPosition='left' placeholder='Username' />
                  <Form.Input id='password' minLength='6' required fluid icon='user' iconPosition='left' placeholder='Password' />
                  <Form.Input id='phone' required fluid icon='phone' iconPosition='left' placeholder='Phone number' />
                  <Button style={{backgroundColor:'#5cb5ed', color:'white'}} fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
              </Message>
            </Grid.Column>
          </Grid>
          </div>
        );
    }
}


 


export default SingUpForm