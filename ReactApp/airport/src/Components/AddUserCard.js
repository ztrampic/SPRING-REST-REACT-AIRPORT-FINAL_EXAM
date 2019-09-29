import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { select } from '../Helpers/DataUtilsHelper'

export default class AddUserCard extends Component {
        constructor(props){
            super(props)
            this.state = {
                roles:[],
            }
            this.getAllRoles = this.getAllRoles.bind(this)
        }

    componentDidMount(){
        this.getAllRoles()
    }    

    getAllRoles(){
    select('getAllRoles')
      .then(res => {
        let apiRoles = res;   
        this.setState({ roles: apiRoles });       
      })
    }

    render() {
        return (
            <div>
                <Input focus></Input>
                <Input focus></Input>
                <Input focus></Input>
                
            </div>
        )
    }
}
