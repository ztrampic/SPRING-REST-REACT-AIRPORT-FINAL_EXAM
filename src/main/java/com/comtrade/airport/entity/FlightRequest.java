package com.comtrade.airport.entity;

import com.comtrade.airport.enums.FlightRequestStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class FlightRequest implements Serializable   {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "airplaneId", referencedColumnName = "idAirplane")
    private Airplane airplane;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "destinationAirportId", referencedColumnName = "id")
    private Airport destinationAirport;
    private String datum;
    @Enumerated(EnumType.STRING)
    private FlightRequestStatus status;
    @Column(length = 500)
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Airplane getAirplane() {
        return airplane;
    }

    public void setAirplane(Airplane airplane) {
        this.airplane = airplane;
    }

    public Airport getDestinationAirort() {
        return destinationAirport;
    }

    public void setDestinationAirort(Airport destinationAirort) {
        this.destinationAirport = destinationAirort;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public FlightRequestStatus getStatus() {
        return status;
    }

    public void setStatus(FlightRequestStatus status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
