package com.comtrade.airport.entity;

import javax.persistence.*;
import java.util.Set;
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reservationNumber;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;
    private Double finalPrice;
    @OneToMany(mappedBy = "reservation")
    private Set<Ticket> ticketSet;
    @ManyToMany(cascade = {CascadeType.REFRESH, CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST},mappedBy = "reservationSet",fetch = FetchType.LAZY)
    private Set<Flight> flightSet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReservationNumber() {
        return reservationNumber;
    }

    public void setReservationNumber(String reservationNumber) {
        this.reservationNumber = reservationNumber;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getFinalPrice() {
        return finalPrice;
    }

    public void setFinalPrice(Double finalPrice) {
        this.finalPrice = finalPrice;
    }

    public Set<Ticket> getTicketSet() {
        return ticketSet;
    }

    public void setTicketSet(Set<Ticket> ticketSet) {
        this.ticketSet = ticketSet;
    }

    public Set<Flight> getFlightSet() {
        return flightSet;
    }

    public void setFlightSet(Set<Flight> flightSet) {
        this.flightSet = flightSet;
    }

    public void addTicket(Ticket ticket){
        ticketSet.add(ticket);
        ticket.setReservation(this);
    }

    public void removeTicket(Ticket ticket){
        ticketSet.remove(ticket);
        ticket.setReservation(null);
    }

    public void addFlight(Flight flight){
        flightSet.add(flight);
        flight.getReservationSet().add(this);
    }

    public void removeFlight(Flight flight){
        flightSet.remove(flight);
        flight.getReservationSet().remove(this);
    }

}
