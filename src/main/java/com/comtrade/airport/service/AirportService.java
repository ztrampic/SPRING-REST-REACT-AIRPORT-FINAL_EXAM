package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;

import java.util.List;

public interface AirportService {
    Airport newAirport(Airport airport);
    List<Airport> getAllAirports();
    List<Airport> getSearchAirports(AirportDTO airportDTO);
    List<Airport> updateAirport(Airport airport);
}
