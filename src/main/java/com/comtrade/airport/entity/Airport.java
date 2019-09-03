package com.comtrade.airport.entity;


import javax.persistence.*;
import java.util.Set;

@Entity
public class Airport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String name;
    private String city;
    private String country;
    private double latitude;
    private double longitute;
    private String email;
    private int numberOfMaxDepartures;
    private int numberOfMaxArrivals;
    @OneToOne(mappedBy = "airport",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private UserAirport userAirport;
    @ManyToMany(mappedBy = "airportList")
    private Set<AirCompany>airCompanySet;

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public double getLatitude() {
        return latitude;
    }
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }
    public double getLongitute() {
        return longitute;
    }
    public void setLongitute(double longitute) {
        this.longitute = longitute;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getNumberOfMaxDepartures() {
        return numberOfMaxDepartures;
    }

    public void setNumberOfMaxDepartures(int numberOfMaxDepartures) {
        this.numberOfMaxDepartures = numberOfMaxDepartures;
    }

    public int getNumberOfMaxArrivals() {
        return numberOfMaxArrivals;
    }

    public void setNumberOfMaxArrivals(int numberOfMaxArrivals) {
        this.numberOfMaxArrivals = numberOfMaxArrivals;
    }

    public UserAirport getUserAirport() {
        return userAirport;
    }

    public void setUserAirport(UserAirport userAirport) {
        this.userAirport = userAirport;
    }

    public Set<AirCompany> getAirCompanySet() {
        return airCompanySet;
    }

    public void setAirCompanySet(Set<AirCompany> airCompanySet) {
        this.airCompanySet = airCompanySet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Airport)) return false;
        Airport airport = (Airport) o;
        return getId().equals(airport.getId());
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
