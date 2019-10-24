package com.comtrade.airport.service;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;

import java.util.List;
import java.util.Set;

public interface AirplaneService {

    List<Airplane> getAllForId(Long id);
    Airplane insertNewAirplane(Airplane airplane);
    void removeAll(AirCompany airCompany);
    Set<Airplane> deleteAndGetRest(Long id);
}
