package com.comtrade.airport.entity;

import com.comtrade.airport.enums.TicketStatus;
import com.comtrade.airport.enums.TicketType;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String number;
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private TicketType ticketType;
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private TicketStatus ticketStatus;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_reservation", referencedColumnName = "id")
    private Reservation reservation;
    private Double price;

    public TicketStatus getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(TicketStatus ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public TicketType getTicketType() {
        return ticketType;
    }

    public void setTicketType(TicketType ticketType) {
        this.ticketType = ticketType;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
