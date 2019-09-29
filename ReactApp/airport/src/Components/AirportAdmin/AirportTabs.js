import React from 'react'
import { Tab, Button } from 'semantic-ui-react'
import AirportTabsStaffTable from './AirportTabsStaffTable'
import AirportTabsFlightRequests from './AirportTabsFlightRequests'
import AirportTabsAccounts from './AirportTabsAccounts'

const panes = [
    { menuItem: 'Accounts', render: () => <Tab.Pane><AirportTabsAccounts/></Tab.Pane> },
    { menuItem: 'Flight Request', render: () => <Tab.Pane><AirportTabsFlightRequests></AirportTabsFlightRequests></Tab.Pane> },
    { menuItem: 'Employees', render: () => <Tab.Pane><AirportTabsStaffTable></AirportTabsStaffTable></Tab.Pane> },
  ]

const AirportTabs = () => (
    <Tab
    menu={{ fluid: true, vertical: true }}
    menuPosition='left'
    panes={panes}
    ></Tab>
)

export default AirportTabs;