import React from 'react'
import { Tab, Button } from 'semantic-ui-react'
import AirportTabsStaffTable from './AirportTabsStaffTable'
import AirportTabsFlightRequests from './AirportTabsFlightRequests'
import AirportTabsAccounts from './AirportTabsAccounts'
import ApplicationSettings from './ApplicationSettings'

const panes = [
    { menuItem: 'Accounts', render: () => <Tab.Pane  style={{backgroundColor:"aliceblue"}}><AirportTabsAccounts/></Tab.Pane> },
    { menuItem: 'Flight Request', render: () => <Tab.Pane><AirportTabsFlightRequests></AirportTabsFlightRequests></Tab.Pane> },
    { menuItem: 'Employees', render: () => <Tab.Pane><AirportTabsStaffTable></AirportTabsStaffTable></Tab.Pane> },
    { menuItem: 'Application Settings', render: () => <Tab.Pane><ApplicationSettings></ApplicationSettings></Tab.Pane> },
  ]

const AirportTabs = () => (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='left'
      panes={panes}
    ></Tab>
)

export default AirportTabs;