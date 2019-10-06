import React from 'react'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { select } from './Helpers/DataUtilsHelper'
import { checkIsAuth, setTokenToSessionStorage, setAuthUserToSessionStorage, isAdmin, isAdminAirport } from './Helpers/AuthHelper'
import HomeImg from './resources/img/home.jpg'

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
          <div>
          <img style={{position:'absolute', width:'100%',marginBottom:'1rem',height:'59%'}} src ={HomeImg} alt={HomeImg}/>
            <Grid textAlign='center' style={{ height: '60vh'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size='large' onSubmit={this.login}>
                <Segment stacked>
                  <Form.Input  id='username' required fluid icon='user' iconPosition='left' placeholder='Username' />
                  <Form.Input
                    autocomplete="current-password"
                    id='password'
                    required
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
                  <Button style={{backgroundColor:'#5cb5ed', color:'white'}} fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href="/singUpForm">Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
          </div>
        );
    }
}


 


export default LoginForm