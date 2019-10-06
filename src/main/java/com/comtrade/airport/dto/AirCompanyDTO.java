package com.comtrade.airport.dto;

import java.util.Set;

public class AirCompanyDTO {

    private String idAirCompany;
    private String name;
    private String nebitno;
    private String nebitno2;
    private String mark;
    private String internationalName;
    private String country;
    private String nebitno3;
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

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getInternationalName() {
        return internationalName;
    }

    public void setInternationalName(String internationalName) {
        this.internationalName = internationalName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
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
