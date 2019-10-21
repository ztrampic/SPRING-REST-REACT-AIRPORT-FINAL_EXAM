package com.comtrade.airport.service;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;

import java.util.List;

public interface AirplaneService {

    List<Airplane> getAllForId(Long id);
    Airplane insertNewAirplane(Airplane airplane);
    void removeAll(AirCompany airCompany);
}
