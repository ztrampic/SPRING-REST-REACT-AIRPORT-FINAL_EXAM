package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.mapper.AirplaneMapper;
import com.comtrade.airport.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AirplaneServiceImpl implements AirplaneService{

    private final AirplaneRepository airplaneRepository;
    private final AirplaneMapper airplaneMapper;
    @Autowired
    public AirplaneServiceImpl(AirplaneRepository airplaneRepository, AirplaneMapper airplaneMapper) {
        this.airplaneRepository = airplaneRepository;
        this.airplaneMapper = airplaneMapper;
    }



    @Override
    @Transactional
    public List<AirplaneDTO> getAllForId(Long id) {
        List<Airplane> list = airplaneRepository.getAllForIdAirportCompany(id);
        List<AirplaneDTO>listDtos = airplaneMapper.convertEntityListToDTOList(list);
        return listDtos;
    }

    @Override
    @Transactional
    public AirplaneDTO insertNewAirplane(AirplaneDTO airplaneDto) {
        Airplane airplane = airplaneMapper.convertDTOtoEntity(airplaneDto);
        Airplane airplaneWitID = airplaneRepository.save(airplane);
        AirplaneDTO airplaneDTO = airplaneMapper.convertEntityToDTO(airplaneWitID);
        return airplaneDTO;
    }
}
