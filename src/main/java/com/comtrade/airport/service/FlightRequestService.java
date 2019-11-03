package com.comtrade.airport.service;

import com.comtrade.airport.entity.FlightRequest;

import java.util.List;


public interface FlightRequestService {
    void insertNewFR(FlightRequest flightRequest);
    List<FlightRequest> getAll();
    List<FlightRequest> getAllPennding();
    List<FlightRequest> declineFlightRequest(Long id);
    List<FlightRequest> acceptFlightRequst(Long id);
    List<FlightRequest> getAllAccepted();
    List<FlightRequest> getAllDeclined();
    void approveFlightRequest(Long id);
    void deleteFlightRequest(Long id);
}
