import React from 'react'
import { Tab } from 'semantic-ui-react'
import AddUserCard from '../AddUserCard'

const panes = [
  {
    menuItem: 'Add User Aircompany',
    render: () => <Tab.Pane attached={false}><AddUserCard/></Tab.Pane>,
  },
  {
    menuItem: 'Add User Employee',
    render: () => <Tab.Pane attached={false}>Add User Employee</Tab.Pane>,
  },
  {
    menuItem: 'All Users',
    render: () => <Tab.Pane attached={false}>All Users</Tab.Pane>,
  },
]

const AirportTabsAccounts = () => <Tab menu={{ pointing: true }} panes={panes} />

export default AirportTabsAccounts