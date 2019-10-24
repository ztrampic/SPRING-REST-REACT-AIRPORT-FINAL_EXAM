package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.Airplane;

import java.util.List;
import java.util.Set;

public interface AirplaneMapper {
    Airplane convertDTOtoEntity(AirplaneDTO airplaneDto);
    List<AirplaneDTO> convertEntityListToDTOList(List<Airplane> list);
    AirplaneDTO convertEntityToDTO(Airplane airplaneWitID);
    Set<AirplaneDTO> convertSetToDTOSet(Set<Airplane> airplaneSet);
}
