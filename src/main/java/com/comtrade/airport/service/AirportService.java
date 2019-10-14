package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;

import java.util.List;
import java.util.Set;

public interface AirportService {
    Airport newAirport(Airport airport);
    List<Airport> getAllAirports();
    List<Airport> getSearchAirports(AirportDTO airportDTO);
    List<Airport> updateAirport(Airport airport);
    void hardDeleteAirport(Long idDel);
    List<Airport> getSearchAirportBycity(String cityName);
    Airport findById(long parseLong);
    Set<AirCompanyDTO> getAllForId(Long id);
    Set<AirCompanyDTO> updateSetOfAirCompanys(Long id, Long idAircompany);
}
