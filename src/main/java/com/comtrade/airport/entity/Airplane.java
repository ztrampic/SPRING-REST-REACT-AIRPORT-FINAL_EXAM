package com.comtrade.airport.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Airplane {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAirplane;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idAirCompany")
    private AirCompany airCompany;
    private String mark;
    private Long seatingCapacity;
    private Double maxDistance;
    @JsonIgnore
    @OneToMany(mappedBy = "airplane",orphanRemoval = true)
    private Set<FlightRequest>flightRequestSet;

    public Set<FlightRequest> getFlightRequestSet() {
        return flightRequestSet;
    }

    public void setFlightRequestSet(Set<FlightRequest> flightRequestSet) {
        this.flightRequestSet = flightRequestSet;
    }

    public Long getIdAirplane() {
        return idAirplane;
    }

    public void setIdAirplane(Long idAirplane) {
        this.idAirplane = idAirplane;
    }

    public AirCompany getAirCompany() {
        return airCompany;
    }

    public void setAirCompany(AirCompany airCompany) {
        this.airCompany = airCompany;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public Long getSeatingCapacity() {
        return seatingCapacity;
    }

    public void setSeatingCapacity(Long seatingCapacity) {
        this.seatingCapacity = seatingCapacity;
    }

    public Double getMaxDistance() {
        return maxDistance;
    }

    public void setMaxDistance(Double maxDistance) {
        this.maxDistance = maxDistance;
    }

}
