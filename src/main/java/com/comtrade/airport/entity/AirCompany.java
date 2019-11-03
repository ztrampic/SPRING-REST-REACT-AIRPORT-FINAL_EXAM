package com.comtrade.airport.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AirCompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAirCompany;
    private String name;
    private String mark;
    private String internationalName;
    private String country;
    @ManyToMany(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinTable(name = "AirCompany_Airport",
            joinColumns = @JoinColumn(name = "aircompanyId"),
            inverseJoinColumns = @JoinColumn(name = "airport_id"))
    private Set<Airport>airportList;
    @OneToMany(mappedBy = "airCompany",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<Flight> flightList;
    @OneToMany(mappedBy = "airCompany",cascade = CascadeType.ALL)
    private Set<Airplane> fleet ;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "AircompanyUsers", joinColumns = @JoinColumn(name = "idAirCompany"), inverseJoinColumns = @JoinColumn(name = "userId"))
    private Set<User>setUsers;

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getInternationalName() {
        return internationalName;
    }

    public void setInternationalName(String internationalName) {
        this.internationalName = internationalName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Set<User> getSetUsers() {
        return setUsers;
    }

    public void setSetUsers(Set<User> setUsers) {
        this.setUsers = setUsers;
    }

    public Set<Airplane> getFleet() {
        return fleet;
    }

    public void setFleet(Set<Airplane> fleet) {
        this.fleet = fleet;
    }

    public Long getIdAirCompany() {
        return idAirCompany;
    }

    public void setIdAirCompany(Long idAirCompany) {
        this.idAirCompany = idAirCompany;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Airport> getAirportList() {
        return airportList;
    }

    public void setAirportList(Set<Airport> airportList) {
        this.airportList = airportList;
    }

    public Set<Flight> getFlightList() {
        return flightList;
    }

    public void setFlightList(Set<Flight> flightList) {
        this.flightList = flightList;
    }

    public void addFlight(Flight flight){
        flightList.add(flight);
        flight.setAirCompany(this);
    }
    public void remove(Flight flight){
        flightList.remove(flight);
        flight.setAirCompany(null);
    }
    public void addAirplanetoFleet(Airplane airplane){
        fleet.add(airplane);
        airplane.setAirCompany(this);
    }
    public void removeAirplaneFromFleet(Airplane airplane){
        fleet.remove(airplane);
        airplane.setAirCompany(null);
    }
    public void addUser(User user){
        setUsers.add(user);
        user.getAirCompanySet().add(this);
    }
    public void removeUser(User user){
        setUsers.remove(user);
        user.getAirCompanySet().remove(this);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AirCompany)) return false;
        AirCompany that = (AirCompany) o;
        return getIdAirCompany().equals(that.getIdAirCompany());
    }

    @Override
    public int hashCode() {
        return 31;
    }
}
