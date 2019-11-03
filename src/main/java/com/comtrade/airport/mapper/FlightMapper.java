package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.Flight;

import java.util.List;
import java.util.Set;

public interface FlightMapper {
    Set<FlightDTO> convertListToDTOSet(List<Flight> flights);
    Flight convertDTOtoEntity(FlightDTO flightDTO);
    Flight createFlight(AirCompany airCompany, Airplane airplane, Airport departureAirport, Airport arrivalAirport, FlightDTO flightDTO);
    FlightDTO convertToDTO(Flight flight);
}
