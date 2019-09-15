package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.Airplane;

import java.util.List;

public interface AirplaneMapper {
    Airplane convertDTOtoEntity(AirplaneDTO airplaneDto);

    List<AirplaneDTO> convertEntityToDTO(List<Airplane> list);
}
