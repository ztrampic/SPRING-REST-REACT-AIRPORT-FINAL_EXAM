package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class AirportMapperImpl implements AirportMapper{

    private final AirportService airportService;
    @Autowired
    public AirportMapperImpl(AirportService airportService) {
        this.airportService = airportService;
    }

    @Override
    @Transactional
    public Airport convertAirportDTOtoAirport(AirportDTO airportDTO) {
        String naziv = airportDTO.getName();
        String grad  = airportDTO.getCity();
        String code = airportDTO.getCode();
        String drzava = airportDTO.getCountry();
        Airport airport = new Airport();
        airport.setCity(grad);
        airport.setCode(code);
        airport.setCountry(drzava);
        airport.setName(naziv);
        Airport  a1 = airportService.newAirport(airport);
        return a1;
    }

    @Override
    public AirportDTO convertAirportToAirportDTO(Airport air) {
        AirportDTO aDTO = new AirportDTO();
        aDTO.setId(String.valueOf(air.getId()));
        aDTO.setName(air.getName());
        aDTO.setCity(air.getCity());
        aDTO.setCountry(air.getCountry());
        aDTO.setCode(air.getCode());
        return aDTO;
    }
}
