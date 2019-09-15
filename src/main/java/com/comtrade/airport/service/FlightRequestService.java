package com.comtrade.airport.service;

import com.comtrade.airport.entity.FlightRequest;

import java.util.List;

public interface FlightRequestService {
    List<FlightRequest> getAll();

    void insertNewFR(FlightRequest flightRequest);
}
