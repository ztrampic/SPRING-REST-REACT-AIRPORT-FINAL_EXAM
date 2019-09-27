import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { select } from './Helpers/DataUtilsHelper'
import { checkIsAuth, setTokenToSessionStorage, setAuthUserToSessionStorage, isAdmin, isAdminAirport } from './Helpers/AuthHelper'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          isLogged:checkIsAuth(),
          authInProggres: false,

        }
        this.login = this.login.bind(this)
        this.getAuthUserInformation = this.getAuthUserInformation.bind(this)
    }
  
    getAuthUserInformation(loginDTO) {
      select('getAuthUser', loginDTO).then(data => {
          setAuthUserToSessionStorage(data)
          this.setState({ isLogged: true, authInProgress: false, isHovering: false }, () => {
              if (isAdmin()) {
                  this.props.history.push('/admin')
              }else if(isAdminAirport()){
                this.props.history.push('/airCompanyAdmin')
              }
          })
      })
  }


  login(){
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const loginDTO={username,password}
      select('getToken',loginDTO)
      .then(response =>{
        this.setState({ authInProggres:true}, ()=> {setTokenToSessionStorage(response.accessToken) })       
      })
      .then(() => {  
        console.log(loginDTO); 
        this.getAuthUserInformation(loginDTO)
    })
 }


    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
              </Header>
              <Form size='large' onSubmit={this.login}>
                <Segment stacked>
                  <Form.Input  id='username' required fluid icon='user' iconPosition='left' placeholder='Username' />
                  <Form.Input
                    id='password'
                    required
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
                  <Button color='teal' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href="/singUpForm">Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        );
    }
}


 


export default LoginForm