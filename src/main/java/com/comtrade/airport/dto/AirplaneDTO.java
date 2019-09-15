package com.comtrade.airport.dto;

public class AirplaneDTO {

    private String idAirplane;
    private AirCompanyDTO airCompanyDTO;
    private String mark;
    private String seatingCapacity;
    private String maxFlyDistance;

    public String getIdAirplane() {
        return idAirplane;
    }

    public void setIdAirplane(String idAirplane) {
        this.idAirplane = idAirplane;
    }

    public AirCompanyDTO getAirCompanyDTO() {
        return airCompanyDTO;
    }

    public void setAirCompanyDTO(AirCompanyDTO airCompanyDTO) {
        this.airCompanyDTO = airCompanyDTO;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getSeatingCapacity() {
        return seatingCapacity;
    }

    public void setSeatingCapacity(String seatingCapacity) {
        this.seatingCapacity = seatingCapacity;
    }

    public String getMaxFlyDistance() {
        return maxFlyDistance;
    }

    public void setMaxFlyDistance(String maxFlyDistance) {
        this.maxFlyDistance = maxFlyDistance;
    }
}
