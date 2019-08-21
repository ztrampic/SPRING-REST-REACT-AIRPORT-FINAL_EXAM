
import React from 'react'


const DropDownAirports = ({airports}) => {
    

    return (
        <div> 
          {airports? <select id="userlist" value={airports}>
            {airports.map((airport) => <option key = {airport.id}>{airport.name};{airport.city}</option>)}
          </select> : ''}
        </div>
                
    )
}

export default DropDownAirports;

