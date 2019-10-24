package com.comtrade.airport.service;

import com.comtrade.airport.repository.AirportRepository;
import com.comtrade.airport.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class FlightServiceImpl implements FlightService{

    private final FlightRepository flightRepository;
    private final AirportRepository airportRepository;
    @Autowired
    public FlightServiceImpl(FlightRepository flightRepository, AirportRepository airportRepository) {
        this.flightRepository = flightRepository;
        this.airportRepository = airportRepository;
    }

    @Override
    @Transactional
    public boolean checkDepartureTermin(Long id, String date) throws ParseException {
        Date date1=new SimpleDateFormat("yyyy-MM-dd").parse(date);
        Integer maxDepartures = airportRepository.getMaxDepartures(id);
        Integer numberOfFlightsForDate = flightRepository.getNumberOfFlightsThatDay(date1,id);
        if(maxDepartures-numberOfFlightsForDate > 0){
            return true;
        }
        return false;
    }
}
