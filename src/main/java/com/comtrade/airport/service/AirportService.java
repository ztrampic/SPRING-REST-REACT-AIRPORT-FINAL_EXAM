package com.comtrade.airport.service;

import com.comtrade.airport.entity.Airport;

import java.util.List;

public interface AirportService {
    Airport newAirport(Airport airport);
    List<Airport> getAllAirports();
}
