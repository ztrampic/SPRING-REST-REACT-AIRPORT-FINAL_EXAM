package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirplaneDTO;

import java.util.List;

public interface AirplaneService {

    List<AirplaneDTO> getAllForId(Long id);
    AirplaneDTO insertNewAirplane(AirplaneDTO airplaneDto);
}
