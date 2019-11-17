package com.comtrade.airport.dto;

public class  FlightRequestDTO {
    private String idFR;
    private AirplaneDTO airplaneDTO;
    private AirportDTO destinationAirportDTO;
    private String datum;
    private String description;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIdFR() {
        return idFR;
    }

    public void setIdFR(String idFR) {
        this.idFR = idFR;
    }

    public AirplaneDTO getAirplaneDTO() {
        return airplaneDTO;
    }

    public void setAirplaneDTO(AirplaneDTO airplaneDTO) {
        this.airplaneDTO = airplaneDTO;
    }

    public AirportDTO getDestinationAirportDTO() {
        return destinationAirportDTO;
    }

    public void setDestinationAirportDTO(AirportDTO destinationAirportDTO) {
        this.destinationAirportDTO = destinationAirportDTO;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
