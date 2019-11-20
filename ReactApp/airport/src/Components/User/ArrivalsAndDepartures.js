import React from 'react'
import moment from 'moment'
import { select } from '../../Helpers/DataUtilsHelper'
import { Segment, Tab, Menu, Label } from 'semantic-ui-react'
import HomeImg from '../../resources/img/home.jpg'
import SearchDepartures from './SearchDepartures'

class ArrivalsAndDepartures extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            allFlights: [],
        }
        this.loadAllFlights = this.loadAllFlights.bind(this)
    }

    componentDidMount() {
        this.loadAllFlights()
    }

    loadAllFlights() {
        const { date } = this.state;
        const reqDate = moment(date).format('YYYY-MM-DD');
        select('getPublicFlightsForDate', reqDate)
            .then(res => {
                const apiRes = res.data;
            })
    }

    render() {
        const panes = [
            {
                menuItem: { key: 'arrivals', icon: 'plane', content: 'Arrivals' },
                render: () => <Tab.Pane>
                                In progress.....
                              </Tab.Pane>,
            },
            {
                menuItem: { key: 'arrivals', icon: 'plane', content: 'Departures' },
                render: () => <Tab.Pane>
                                <SearchDepartures>
                                </SearchDepartures>
                              </Tab.Pane>,
            }
        ]
        return (
            <div>
                <Segment>
                    <Tab panes={panes} />
                </Segment>
               
            </div>
        )
    }
}

export default ArrivalsAndDepartures