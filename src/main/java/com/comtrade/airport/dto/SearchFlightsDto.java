package com.comtrade.airport.dto;

public class SearchFlightsDto {

    private Long idAirportDeparture;
    private String airCompanyName;
    private String cityDestination;
    private String flightNumber;

    public Long getIdAirportDeparture() {
        return idAirportDeparture;
    }

    public void setIdAirportDeparture(Long idAirportDeparture) {
        this.idAirportDeparture = idAirportDeparture;
    }

    public String getAirCompanyName() {
        return airCompanyName;
    }

    public void setAirCompanyName(String airCompanyName) {
        this.airCompanyName = airCompanyName;
    }

    public String getCityDestination() {
        return cityDestination;
    }

    public void setCityDestination(String cityDestination) {
        this.cityDestination = cityDestination;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }
}
