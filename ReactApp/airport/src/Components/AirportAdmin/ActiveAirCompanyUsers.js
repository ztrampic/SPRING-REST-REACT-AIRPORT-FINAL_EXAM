import React, { Component } from 'react'
import { Button, Segment, SegmentGroup } from 'semantic-ui-react'
import { select } from '../../Helpers/DataUtilsHelper'
import { getAuthUserFromSessionStorage } from '../../Helpers/AuthHelper'
import AirportAirCompanyUsers from './AirportAirCompanyUsers'
import ModalAddAdmin from '../modals/ModalAddAdmin'

class ActiveAirCompanyUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            airCompanies:[],
            idUser:'',
            modalAddAdmin:false,
            idAircompanyForAddAdmin:'',
        }
        this.getAllAircompanyUsers = this.getAllAircompanyUsers.bind(this)
        this.addAdminToggle = this.addAdminToggle.bind(this)
        this.deleteAirportFromUserList = this.deleteAirportFromUserList.bind(this)
        this.closeAdminModal = this.closeAdminModal.bind(this)
    }

    componentDidMount() {
        this.getUserOfApplicationAirport();
    }

    getUserOfApplicationAirport(){
        select('getUserOfAppInfoAdmin',1)
        .then(res=>{
            const airport = res.data;
            this.setState({idUser:airport.airportDTO.id})
        })
    }
    addAdminToggle(id){
     this.setState({modalAddAdmin:true,idAircompanyForAddAdmin:id})   
    }
    closeAdminModal(){
        this.setState({modalAddAdmin:false})
    }

    getAllAircompanyUsers(){
        const id = this.state.idUser;
        select('getAllAirCompanyUsers',id)
            .then(res=>{
                const apiAirComp = res.data;
                this.setState({airCompanies:apiAirComp})
            })
    }

    deleteAirportFromUserList(id){
        const {idUser} = this.state;
        const ids = {id:id,idUser:idUser}
        
        select('deleteAirCompanyUser',ids)
        .then(res=>{
            const apiAirComp = res.data;
            this.setState({airCompanies:apiAirComp})
        })
        
    }

    render() {
        const {airCompanies,modalAddAdmin, idAircompanyForAddAdmin} = this.state;
        return (
            <div>
                <SegmentGroup vertical>
                   <Segment>
                        <Button size='mini' style={{color:'white',backgroundColor:'#2185d0'}} onClick={this.getAllAircompanyUsers}>Get All</Button>
                    </Segment>
                    <Segment>
                        <AirportAirCompanyUsers
                            airCompanies = {airCompanies}
                            addAdminToggle = {this.addAdminToggle}
                            deleteAirportFromUserList = {this.deleteAirportFromUserList}
                            closeAdminModal = {this.closeAdminModal}
                        />
                   </Segment>
                </SegmentGroup>
                <ModalAddAdmin
                    open={modalAddAdmin}
                    idAircompanyForAddAdmin = {idAircompanyForAddAdmin}
                    closeAdminModal={this.closeAdminModal}>
                </ModalAddAdmin>
            </div>
        )
    }
}


export default ActiveAirCompanyUsers