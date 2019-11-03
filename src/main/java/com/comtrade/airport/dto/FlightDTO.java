package com.comtrade.airport.dto;

import java.util.Set;

public class FlightDTO {
    private Long id;
    private AirCompanyDTO airCompanyDTO;
    private String flightNumber;
    private Double distance;
    private AirportDTO departureAirportDTO;
    private AirportDTO arrivalAirportDTO;
    private String availableSeats;
    private Set<ReservationDTO>reservationDTOS;
    private AirplaneDTO airplaneDTO;
    private FlightScheduleDTO flightScheduleDTO;
    private String arrivalTime;
    private String departureDate;
    private String departureTime;
    private String idDestination;
    private String homeAirportId;
    private String idAirplane;

    public FlightScheduleDTO getFlightScheduleDTO() {
        return flightScheduleDTO;
    }

    public void setFlightScheduleDTO(FlightScheduleDTO flightScheduleDTO) {
        this.flightScheduleDTO = flightScheduleDTO;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public AirCompanyDTO getAirCompanyDTO() {
        return airCompanyDTO;
    }

    public void setAirCompanyDTO(AirCompanyDTO airCompanyDTO) {
        this.airCompanyDTO = airCompanyDTO;
    }

    public AirportDTO getDepartureAirportDTO() {
        return departureAirportDTO;
    }

    public void setDepartureAirportDTO(AirportDTO departureAirportDTO) {
        this.departureAirportDTO = departureAirportDTO;
    }

    public AirportDTO getArrivalAirportDTO() {
        return arrivalAirportDTO;
    }

    public void setArrivalAirportDTO(AirportDTO arrivalAirportDTO) {
        this.arrivalAirportDTO = arrivalAirportDTO;
    }

    public String getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(String availableSeats) {
        this.availableSeats = availableSeats;
    }

    public Set<ReservationDTO> getReservationDTOS() {
        return reservationDTOS;
    }

    public void setReservationDTOS(Set<ReservationDTO> reservationDTOS) {
        this.reservationDTOS = reservationDTOS;
    }

    public AirplaneDTO getAirplaneDTO() {
        return airplaneDTO;
    }

    public void setAirplaneDTO(AirplaneDTO airplaneDTO) {
        this.airplaneDTO = airplaneDTO;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getHomeAirportId() {
        return homeAirportId;
    }

    public void setHomeAirportId(String homeAirportId) {
        this.homeAirportId = homeAirportId;
    }

    public String getIdAirplane() {
        return idAirplane;
    }

    public void setIdAirplane(String idAirplane) {
        this.idAirplane = idAirplane;
    }

    public String getIdDestination() {
        return idDestination;
    }

    public void setIdDestination(String idDestination) {
        this.idDestination = idDestination;
    }
}













//    private String id;
//    private AirCompanyDTO airCompanyDTO;
//    private String flightNumber;
//    private Double distance;
//    private AirportDTO departureAirportDTO;
//    private AirportDTO arrivalAirportDTO;
//    private int availableSeats;
//    private Set<ReservationDTO> reservationSet;
//    private AirplaneDTO airplane;