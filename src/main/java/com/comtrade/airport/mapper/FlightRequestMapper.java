package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.FlightRequestDTO;
import com.comtrade.airport.entity.FlightRequest;

import java.util.List;

public interface FlightRequestMapper {
    List<FlightRequestDTO> convertToListDTOs(List<FlightRequest> list);
    FlightRequest convertDTOtoEntity(FlightRequestDTO flightRequestDTO);
}
