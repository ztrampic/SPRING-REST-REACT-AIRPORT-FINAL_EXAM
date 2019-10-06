package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.entity.AirCompany;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class AirCompanyMapperImpl implements AirCompanyMapper {

    @Override
    @Transactional
    public AirCompany convertToEntity(AirCompanyDTO airCompanyDTO) {
        AirCompany airCompany = new AirCompany();
        airCompany.setName(airCompanyDTO.getName());
        airCompany.setMark(airCompanyDTO.getMark());
        airCompany.setInternationalName(airCompanyDTO.getInternationalName());
        airCompany.setCountry(airCompanyDTO.getCountry());
        return airCompany;
    }

    @Override
    @Transactional
    public AirCompanyDTO convertToDTO(AirCompany airCompany) {
        AirCompanyDTO airCompanyDTO = new AirCompanyDTO();
        airCompanyDTO.setIdAirCompany(String.valueOf(airCompany.getIdAirCompany()));
        airCompanyDTO.setName(airCompany.getName());
        airCompanyDTO.setMark(airCompany.getMark());
        airCompanyDTO.setInternationalName(airCompany.getInternationalName());
        airCompanyDTO.setCountry(airCompany.getCountry());
        return airCompanyDTO;
    }
}
