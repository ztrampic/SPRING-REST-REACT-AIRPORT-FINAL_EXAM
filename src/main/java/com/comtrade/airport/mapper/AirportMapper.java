package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;

import java.util.Set;

public interface AirportMapper {
    Airport convertAirportDTOtoAirport(AirportDTO airportDTO);

    AirportDTO convertAirportToAirportDTO(Airport air);
    AirportAdminSearchDTO convertAirportToAirportAdminSearchDTO(Airport airport);
    Set<AirportDTO> convertSetToDTOSet(Set<Airport> airportList);
}
