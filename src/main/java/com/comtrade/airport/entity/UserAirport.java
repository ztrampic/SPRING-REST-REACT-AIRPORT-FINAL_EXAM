package com.comtrade.airport.entity;

import javax.persistence.*;

@Entity
public class UserAirport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUserAirport;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "airport_id")
    private Airport airport;
    @Column(length = 500)
    private String description;
    private String phoneNumber;
    private String contact;
    private String companyName;

    public Long getIdUserAirport() {
        return idUserAirport;
    }

    public void setIdUserAirport(Long idUserAirport) {
        this.idUserAirport = idUserAirport;
    }

    public Airport getAirport() {
        return airport;
    }

    public void setAirport(Airport airport) {
        this.airport = airport;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
