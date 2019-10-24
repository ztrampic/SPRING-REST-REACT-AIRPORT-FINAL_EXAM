package com.comtrade.airport.service;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.repository.AirCompanyRepository;
import com.comtrade.airport.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AirplaneServiceImpl implements AirplaneService{

    private final AirplaneRepository airplaneRepository;
    private final AirCompanyRepository airCompanyRepository;
    @Autowired
    public AirplaneServiceImpl(AirplaneRepository airplaneRepository, AirCompanyRepository airCompanyRepository) {
        this.airplaneRepository = airplaneRepository;
        this.airCompanyRepository = airCompanyRepository;
    }

    @Override
    @Transactional
    public List<Airplane> getAllForId(Long id) {
        List<Airplane> list = airplaneRepository.getAllForIdAirportCompany(id);
        return list;
    }

    @Override
    @Transactional
    public Airplane insertNewAirplane(Airplane airplane) {
        Airplane airplaneWithID = airplaneRepository.save(airplane);
        return airplaneWithID;
    }

    @Override
    @Transactional
    public void removeAll(AirCompany airCompany) {
        Set<Airplane> airplaneSet = airCompany.getFleet();
        Set<Airplane>toRemove = new HashSet<>();
        for(Airplane airplane : airplaneSet){
            toRemove.add(airplane);
        }
        for(Airplane airplane : toRemove){
            airCompany.removeAirplaneFromFleet(airplane);
            airplaneRepository.deleteById(airplane.getIdAirplane());
        }
    }

    @Override
    @Transactional
    public Set<Airplane> deleteAndGetRest(Long id) {
        Airplane airplane = airplaneRepository.getAirplaneById(id);
        AirCompany airCompany = airCompanyRepository.findAirCompanyById(airplane.getAirCompany().getIdAirCompany());
        airCompany.getFleet().remove(airplane);
        airplaneRepository.deleteById(id);
        AirCompany updatedAirCompany = airCompanyRepository.save(airCompany);
        return updatedAirCompany.getFleet();
    }

}
