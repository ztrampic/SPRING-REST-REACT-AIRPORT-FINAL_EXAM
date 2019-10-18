package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.entity.AirCompany;

import java.util.Set;

public interface AirCompanyService {
    AirCompany newAirCompany(AirCompany airCompany);
    Set<AirCompanyDTO> findByName(String name);
    void insertUserAirCompany(AirportAdminSearchDTO newAirCompany);
    void addNewAdminAccount(Long id, SingUpDTO singUpDTO);
    AirCompanyDTO getAirCompanyForAdminId(Long id);
}
