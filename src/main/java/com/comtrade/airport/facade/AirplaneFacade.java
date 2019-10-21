package com.comtrade.airport.facade;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.mapper.AirplaneMapper;
import com.comtrade.airport.service.AirCompanyService;
import com.comtrade.airport.service.AirplaneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirplaneFacade {
    private final AirplaneService airplaneService;
    private final AirplaneMapper airplaneMapper;
    private final AirCompanyService airCompanyService;
    @Autowired
    public AirplaneFacade(AirplaneService airplaneService, AirplaneMapper airplaneMapper, AirCompanyService airCompanyService) {
        this.airplaneService = airplaneService;
        this.airplaneMapper = airplaneMapper;
        this.airCompanyService = airCompanyService;
    }

    public AirplaneDTO insertNewAirplane(AirplaneDTO airplaneDto) {
        Airplane airplane = airplaneMapper.convertDTOtoEntity(airplaneDto);
        Airplane airplaneWithId = airplaneService.insertNewAirplane(airplane);
        airCompanyService.findByIdAndUpdateFleet(Long.parseLong(airplaneDto.getAirCompanyDTO().getIdAirCompany()),airplaneWithId);
        AirplaneDTO airplaneDTO1 = airplaneMapper.convertEntityToDTO(airplaneWithId);
        return airplaneDTO1;
    }

    public List<AirplaneDTO> getAllForId(Long id) {
        List<Airplane>airplanes = airplaneService.getAllForId(id);
        List<AirplaneDTO> listDtos = airplaneMapper.convertEntityListToDTOList(airplanes);
        return listDtos;
    }
}
