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
    @OneToMany(mappedBy = "airplane",cascade = CascadeType.ALL,orphanRemoval = true)


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
