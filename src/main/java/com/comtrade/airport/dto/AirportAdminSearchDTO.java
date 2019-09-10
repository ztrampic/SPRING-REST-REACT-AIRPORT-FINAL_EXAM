package com.comtrade.airport.dto;

public class AirportAdminSearchDTO {
   private AirportDTO airportDTO;
   private String distance;

    public AirportDTO getAirportDTO() {
        return airportDTO;
    }

    public void setAirportDTO(AirportDTO airportDTO) {
        this.airportDTO = airportDTO;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }
}
