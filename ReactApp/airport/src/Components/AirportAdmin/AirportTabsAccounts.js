import React from 'react'
import { Tab } from 'semantic-ui-react'
import AddUserCard from '../AddUserCard'
import AddAirCompanyCard from '../AddAirCompanyCard'
import ActiveAirCompanyUsers from './ActiveAirCompanyUsers'

const panes = [
  {
    menuItem: 'Add User Aircompany',
    render: () => <Tab.Pane attached={false}><AddAirCompanyCard/></Tab.Pane>,
  },
  {
    menuItem: 'Add User Employee',
    render: () => <Tab.Pane attached={false}><AddUserCard/></Tab.Pane>,
  },
  {
    menuItem: 'Active AirCompany Users',
    render: () => <Tab.Pane attached={false}><ActiveAirCompanyUsers/></Tab.Pane>,
  },
]

const AirportTabsAccounts = () => <Tab menu={{ pointing: true }} panes={panes} />

export default AirportTabsAccounts