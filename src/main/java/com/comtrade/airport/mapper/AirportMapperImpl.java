package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.OptionalDouble;

@Component
public class AirportMapperImpl implements AirportMapper{

    private final AirportService airportService;
    @Autowired
    public AirportMapperImpl(AirportService airportService) {
        this.airportService = airportService;
    }

    @Override
    public Airport convertAirportDTOtoAirport(AirportDTO airportDTO) {

        String naziv = airportDTO.getName();
        String grad  = airportDTO.getCity();
        String code = airportDTO.getCode();
        String drzava = airportDTO.getCountry();
        String idAirport = airportDTO.getId();
        Double latitude;
        Double longitude;
        int sletanja;
        int poletanja;
        if (airportDTO.getLat() == null || airportDTO.getLat().equals("")) {
            latitude = Double.parseDouble("0");
        }else {
            latitude = Double.parseDouble(airportDTO.getLat());
        }
        if (airportDTO.getLon() == null || airportDTO.getLon().equals("")){    //TRENUTNO posle vratiti na string
            longitude =  Double.parseDouble("0");
        }else {
            longitude = Double.parseDouble(airportDTO.getLon());
        }
        if(airportDTO.getDirect_flights() == null || airportDTO.getDirect_flights().equals("")){
            sletanja = Integer.parseInt("0");
        }else{
            sletanja = Integer.parseInt((airportDTO.getDirect_flights()));
        } if(airportDTO.getCarriers() == null || airportDTO.getCarriers().equals("")){
            poletanja = Integer.parseInt("0");
        }else{
            poletanja = Integer.parseInt(airportDTO.getCarriers());
        }
        String email = airportDTO.getEmail();
        Airport airport = new Airport();
        if (idAirport == null) {
            airport.setCity(grad);
            airport.setCode(code);
            airport.setCountry(drzava);
            airport.setName(naziv);
            airport.setLatitude(latitude);
            airport.setLongitute(longitude);
            airport.setEmail(email);
            airport.setNumberOfMaxArrivals(sletanja);
            airport.setNumberOfMaxDepartures(poletanja);
            return airport;
        }
        airport.setCity(grad);
        airport.setCode(code);
        airport.setCountry(drzava);
        airport.setName(naziv);
        airport.setId(Long.parseLong(idAirport));
        airport.setLatitude(latitude);
        airport.setLongitute(longitude);
        airport.setEmail(email);
        airport.setNumberOfMaxArrivals(sletanja);
        airport.setNumberOfMaxDepartures(poletanja);
        return airport;
    }

    @Override
    public AirportDTO convertAirportToAirportDTO(Airport air) {
        AirportDTO aDTO = new AirportDTO();
        aDTO.setId(String.valueOf(air.getId()));
        aDTO.setName(air.getName());
        aDTO.setCity(air.getCity());
        aDTO.setCountry(air.getCountry());
        aDTO.setCode(air.getCode());
        if(air.getLatitude() == 0D){
            aDTO.setLat(String.valueOf(0));
        }else {
            aDTO.setLat(String.valueOf(air.getLatitude()));
        }
        if(air.getLongitute() == 0D) {
            aDTO.setLon(String.valueOf(0));
        }else {
            aDTO.setLon(String.valueOf(air.getLongitute()));
        }
        aDTO.setEmail(air.getEmail());
        aDTO.setCarriers(String.valueOf(air.getNumberOfMaxDepartures()));
        aDTO.setDirect_flights(String.valueOf(air.getNumberOfMaxArrivals()));
        return aDTO;
    }
}
