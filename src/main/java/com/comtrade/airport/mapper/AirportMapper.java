package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;

public interface AirportMapper {
    Airport convertAirportDTOtoAirport(AirportDTO airportDTO);

    AirportDTO convertAirportToAirportDTO(Airport air);
}
