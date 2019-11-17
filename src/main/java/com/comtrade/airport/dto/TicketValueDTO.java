package com.comtrade.airport.dto;

public class TicketValueDTO {
    private Long id;
    private String value;
    private Double price;
    private FlightDTO flightDTO;
    private Long idFlight;

    public FlightDTO getFlightDTO() {
        return flightDTO;
    }

    public void setFlightDTO(FlightDTO flightDTO) {
        this.flightDTO = flightDTO;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getIdFlight() {
        return idFlight;
    }

    public void setIdFlight(Long idFlight) {
        this.idFlight = idFlight;
    }
}
