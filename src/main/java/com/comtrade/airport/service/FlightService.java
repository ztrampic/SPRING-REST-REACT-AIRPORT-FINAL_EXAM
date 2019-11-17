package com.comtrade.airport.service;

import com.comtrade.airport.entity.Flight;

import java.text.ParseException;
import java.util.List;

public interface FlightService {
    boolean checkDepartureTermin(Long id, String date) throws ParseException;
    List<Flight> getAllDepartureFlightsForDate(Long id, String date) throws ParseException;
    Flight insertNewFlight(Flight flight);
    Flight getFlightById(Long id);
    Flight updateFlight(Flight flight);
}
