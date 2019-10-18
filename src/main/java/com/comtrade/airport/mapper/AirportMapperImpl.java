package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Component
public class AirportMapperImpl implements AirportMapper{

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

    @Override
    public AirportAdminSearchDTO convertAirportToAirportAdminSearchDTO(Airport airport) {
        AirportAdminSearchDTO airportAdminSearchDTO = new AirportAdminSearchDTO();
        AirportDTO airportDTO = convertAirportToAirportDTO(airport);
        double lat1 = 44.8192; //promeniti hardcodes
        double lat2 = airport.getLatitude();
        double lon1 = 20.3122; //promeniti hardcode
        double lon2 = airport.getLongitute();
        String distance = String.valueOf(calculateDistance(lat1,lat2,lon1,lon2,"K"));
        airportAdminSearchDTO.setDistance(distance);
        airportAdminSearchDTO.setAirportDTO(airportDTO);
        return airportAdminSearchDTO;
    }

    public double calculateDistance(double lat1, double lat2, double lon1, double lon2, String unit){
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            double theta = lon1 - lon2;
            double dist = Math.sin(Math.toRadians(lat1)) * Math.sin(Math.toRadians(lat2)) + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) * Math.cos(Math.toRadians(theta));
            dist = Math.acos(dist);
            dist = Math.toDegrees(dist);
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            } else if (unit == "N") {
                dist = dist * 0.8684;
            }
            dist = Math.round(dist * 100.0) / 100.0;
            return (dist);
        }
    }

    @Override
    @Transactional
    public Set<AirportDTO> convertSetToDTOSet(Set<Airport> airportList) {
        Set<AirportDTO>airportDTOSet = new HashSet<>();
        for(Airport airport : airportList){
           AirportDTO airportDTO = convertAirportToAirportDTO(airport);
           airportDTOSet.add(airportDTO);
        }
        return airportDTOSet;
    }
}
