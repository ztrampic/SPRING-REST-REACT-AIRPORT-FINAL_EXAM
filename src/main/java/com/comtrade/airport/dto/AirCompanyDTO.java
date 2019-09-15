package com.comtrade.airport.dto;

import java.util.Set;

public class AirCompanyDTO {

    private String idAirCompany;
    private String name;
    private String pib;
    private Set<AirportDTO> airportList;
    private Set<FlightDTO> flightList;
    private Set<AirplaneDTO> fleet ;

    public String getIdAirCompany() {
        return idAirCompany;
    }

    public void setIdAirCompany(String idAirCompany) {
        this.idAirCompany = idAirCompany;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPib() {
        return pib;
    }

    public void setPib(String pib) {
        this.pib = pib;
    }

    public Set<AirportDTO> getAirportList() {
        return airportList;
    }

    public void setAirportList(Set<AirportDTO> airportList) {
        this.airportList = airportList;
    }

    public Set<FlightDTO> getFlightList() {
        return flightList;
    }

    public void setFlightList(Set<FlightDTO> flightList) {
        this.flightList = flightList;
    }

    public Set<AirplaneDTO> getFleet() {
        return fleet;
    }

    public void setFleet(Set<AirplaneDTO> fleet) {
        this.fleet = fleet;
    }
}
