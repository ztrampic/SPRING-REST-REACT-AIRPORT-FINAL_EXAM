import React from 'react'
import { Segment, Button, Grid, Table, Label } from 'semantic-ui-react'
import AirportFlightRequestTable from './AirportFlightRequestTable'
import { select } from '../../Helpers/DataUtilsHelper'
import ModalInsertFlight from '../modals/ModalInsertFlight'

class AirportTabsFlightRequests extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flightRequests:[],
            modalFlightIsOpen:false,
            flightRequest:{},
        }
        this.getAllFlightRequests = this.getAllFlightRequests.bind(this)
        this.openFlightModal = this.openFlightModal.bind(this)
        this.closeFlightModal = this.closeFlightModal.bind(this)
        this.getAllPendingFlightRequsts = this.getAllPendingFlightRequsts.bind(this)
        this.deleteFlightRequest = this.deleteFlightRequest.bind(this)
    }


    componentDidMount() {
    }

    openFlightModal(flightReq){
        console.log(flightReq);
        this.setState({modalFlightIsOpen:true})
        this.setState({flightRequest:flightReq})
    }

    closeFlightModal(){
        this.setState({modalFlightIsOpen:false})
    }

    getAllFlightRequests(){
        select('getAllFlightRequests')
         .then(res=>{
            const apiFR = res.data;
            this.setState({flightRequests:apiFR})
        })
    }

    getAllPendingFlightRequsts(){
        select('getPendingFlightRequests')
        .then(res => {
            const apiFR = res.data;
            this.setState({flightRequests:apiFR})
        })
    }

    deleteFlightRequest(id){
        console.log(id,"IDDDDDDDDDDDDDDD");
        
        select('deleteFlightRequest',id)
        .then(res=>{
            this.getAllFlightRequests();
        })
    }

    render() {
        const {flightRequests,modalFlightIsOpen,flightRequest} = this.state
        return (
            <div>
                <Segment>
                    <Button onClick={this.getAllFlightRequests} style={{ fontSize: 'smaller', color: 'white', backgroundColor: 'rgb(33, 186, 69)' }}>Get all</Button>
                    <Button onClick={this.getAllPendingFlightRequsts} style={{ fontSize: 'smaller', color: 'white', backgroundColor: 'rgb(33, 186, 69)' }}>Get Pending</Button>
                </Segment>
                <Segment>
                    <AirportFlightRequestTable
                     flightRequests={flightRequests}
                     openFlightModal={this.openFlightModal}
                     deleteFlightRequest = {this.deleteFlightRequest}
                    />
                </Segment>
                <ModalInsertFlight 
                    open={modalFlightIsOpen}
                    close={this.closeFlightModal}
                    flightRequest = {flightRequest}
                    />
            </div>
            
        )
    }
}


export default AirportTabsFlightRequests


