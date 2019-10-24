package com.comtrade.airport.service;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;

import java.util.List;

public interface AirCompanyService {
    AirCompany newAirCompany(AirCompany airCompany);
    List<AirCompany> findByName(String name);
    AirCompany getAirCompanyForAdminId(Long id);
    AirCompany findAirCompanyById(Long idAirCompany);
    Airplane findByIdAndUpdateFleet(long parseLong, Airplane airplaneWithId);
}
