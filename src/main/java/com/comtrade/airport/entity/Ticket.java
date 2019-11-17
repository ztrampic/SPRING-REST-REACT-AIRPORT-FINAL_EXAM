package com.comtrade.airport.entity;

import com.comtrade.airport.enums.TicketStatus;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String number;
    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY,optional = true)
    @JoinColumn(name = "ticketValueId", referencedColumnName = "id")
    private TicketValue ticketValue;
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private TicketStatus ticketStatus;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_reservation", referencedColumnName = "id")
    private Reservation reservation;

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

    public TicketValue getTicketValue() {
        return ticketValue;
    }

    public void setTicketValue(TicketValue ticketValue) {
        this.ticketValue = ticketValue;
    }

    public TicketStatus getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(TicketStatus ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
