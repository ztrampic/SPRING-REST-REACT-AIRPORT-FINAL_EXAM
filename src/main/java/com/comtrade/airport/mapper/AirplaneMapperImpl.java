package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AirplaneMapperImpl implements AirplaneMapper{

    @Override
    public Airplane convertDTOtoEntity(AirplaneDTO airplaneDto) {
        Airplane airplane = new Airplane();
        AirCompany airCompany = new AirCompany();
        airCompany.setIdAirCompany(Long.parseLong(airplaneDto.getAirCompanyDTO().getIdAirCompany()));
        airplane.setAirCompany(airCompany);
        String mark = airplaneDto.getMark();
        Long seatingCapacity = Long.parseLong(airplaneDto.getSeatingCapacity());
        Double maxDistance = Double.parseDouble(airplaneDto.getMaxFlyDistance());
        airplane.setMark(mark);
        airplane.setSeatingCapacity(seatingCapacity);
        airplane.setMaxDistance(maxDistance);
        return airplane;
    }

    @Override
    public List<AirplaneDTO> convertEntityListToDTOList(List<Airplane> list) {
        List<AirplaneDTO> listDto = new ArrayList<>();
        for(Airplane a: list){
            AirplaneDTO airplaneDTO = new AirplaneDTO();
            AirCompanyDTO airCompanyDTO = new AirCompanyDTO();
            airCompanyDTO.setIdAirCompany(String.valueOf(a.getAirCompany().getIdAirCompany()));
            airplaneDTO.setAirCompanyDTO(airCompanyDTO);
            airplaneDTO.setIdAirplane(String.valueOf(a.getIdAirplane()));
            airplaneDTO.setMark(a.getMark());
            airplaneDTO.setMaxFlyDistance(String.valueOf(a.getMaxDistance()));
            airplaneDTO.setSeatingCapacity(String.valueOf(a.getSeatingCapacity()));
            listDto.add(airplaneDTO);
        }
        return listDto;
    }

    @Override
    public AirplaneDTO convertEntityToDTO(Airplane a) {
        AirplaneDTO airplaneDTO = new AirplaneDTO();
        AirCompanyDTO airCompanyDTO = new AirCompanyDTO();
        airCompanyDTO.setIdAirCompany(String.valueOf(a.getAirCompany().getIdAirCompany()));
        airplaneDTO.setAirCompanyDTO(airCompanyDTO);
        airplaneDTO.setIdAirplane(String.valueOf(a.getIdAirplane()));
        airplaneDTO.setMark(a.getMark());
        airplaneDTO.setMaxFlyDistance(String.valueOf(a.getMaxDistance()));
        airplaneDTO.setSeatingCapacity(String.valueOf(a.getSeatingCapacity()));
        return airplaneDTO;
    }
}
