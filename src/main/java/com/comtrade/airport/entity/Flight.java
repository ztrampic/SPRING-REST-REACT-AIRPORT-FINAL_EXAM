package com.comtrade.airport.entity;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFlight;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idAirCompany")
    private AirCompany airCompany;
    private String flightNumber;
    private Double distance;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departureAirportId", referencedColumnName = "id")
    private Airport departureAirport;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "arrivalAirportId", referencedColumnName = "id")
    private Airport arrivalAirport;
    private int availableSeats;
    @ManyToOne(fetch = FetchType.LAZY)
    private Airplane airplane;
    @OneToOne(mappedBy = "flight")
    private FlightSchedule flightSchedule;
    @OneToMany(mappedBy = "flight",orphanRemoval = true,cascade = CascadeType.ALL)
    private Set<TicketValue> setTicketValues;

    public Long getIdFlight() {
        return idFlight;
    }

    public void setIdFlight(Long idFlight) {
        this.idFlight = idFlight;
    }

    public AirCompany getAirCompany() {
        return airCompany;
    }

    public void setAirCompany(AirCompany airCompany) {
        this.airCompany = airCompany;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Airport getDepartureAirport() {
        return departureAirport;
    }

    public void setDepartureAirport(Airport departureAirport) {
        this.departureAirport = departureAirport;
    }

    public Airport getArrivalAirport() {
        return arrivalAirport;
    }

    public void setArrivalAirport(Airport arrivalAirport) {
        this.arrivalAirport = arrivalAirport;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    public Airplane getAirplane() {
        return airplane;
    }

    public void setAirplane(Airplane airplane) {
        this.airplane = airplane;
    }

    public FlightSchedule getFlightSchedule() {
        return flightSchedule;
    }

    public void setFlightSchedule(FlightSchedule flightSchedule) {
        this.flightSchedule = flightSchedule;
    }

    public Set<TicketValue> getSetTicketValues() {
        return setTicketValues;
    }

    public void setSetTicketValues(Set<TicketValue> setTicketValues) {
        this.setTicketValues = setTicketValues;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Flight)) return false;
        Flight flight = (Flight) o;
        return getIdFlight().equals(flight.getIdFlight());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdFlight());
    }

    public void addTicketValues(TicketValue ticketValue){
        setTicketValues.add(ticketValue);
        ticketValue.setFlight(this);
    }

    public void removeTicketValue(TicketValue ticketValue){
        setTicketValues.remove(ticketValue);
        ticketValue.setFlight(null);
    }
}
