package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.Airplane;

import java.util.List;

public interface AirplaneService {
    void insertNewAirplane(Airplane airplane);

    List<AirplaneDTO> getAllForId(Long id);
}
