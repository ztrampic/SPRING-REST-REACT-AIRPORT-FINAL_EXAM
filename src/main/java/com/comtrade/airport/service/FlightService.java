package com.comtrade.airport.service;

import java.text.ParseException;

public interface FlightService {
    boolean checkDepartureTermin(Long id, String date) throws ParseException;
}
