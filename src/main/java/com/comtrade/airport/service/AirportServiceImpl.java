package com.comtrade.airport.service;

import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AirportServiceImpl implements AirportService{

    private final AirportRepository airportRepository;
    @Autowired
    public AirportServiceImpl(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }

    @Override
    @Transactional
    public Airport newAirport(Airport airport) {
        Airport airport1 = airportRepository.save(airport);
        return airport1;
    }
}
