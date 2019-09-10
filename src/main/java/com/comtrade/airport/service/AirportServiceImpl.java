package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class AirportServiceImpl implements AirportService{

    private final AirportRepository airportRepository;
    @Autowired
    public AirportServiceImpl(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }

    @Override
    @Transactional
    public Airport newAirport(Airport airport) {
        Airport airport1 = airportRepository.save(airport);
        return airport1;
    }

    @Override
    @Transactional
    public List<Airport> getAllAirports() {
        List<Airport> list = airportRepository.findAll();
        return list;
    }

    @Override
    @Transactional
    public List<Airport> getSearchAirports(AirportDTO airportDTO) {
        String name = airportDTO.getName();
        if(name.equals("")){
            name = null;
        }
        String city = airportDTO.getCity();
        if(city.equals("")){
            city = null;
        }
        List<Airport>list = airportRepository.findSearchAirports(name, city);
        return list;
    }

    @Override
    @Transactional
    public List<Airport> updateAirport(Airport airport) {
        List<Airport>updatedList = new ArrayList<>();
        airportRepository.save(airport);
        updatedList = airportRepository.findAll();
        return updatedList;
    }

    @Override
    @Transactional
    public void hardDeleteAirport(Long idDel) {
        airportRepository.deleteById(idDel);
    }

    @Override
    @Transactional
    public List<Airport> getSearchAirportBycity(String cityName) {
        List<Airport>searchList = new ArrayList<>();
        searchList = airportRepository.findAirportByCityName(cityName);
        return searchList;
    }
}
