package com.comtrade.airport.service;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.repository.AirCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AirCompanyServiceImpl implements AirCompanyService{

    private final AirCompanyRepository airCompanyRepository;

    @Autowired
    public AirCompanyServiceImpl(AirCompanyRepository airCompanyRepository) {
        this.airCompanyRepository = airCompanyRepository;
    }

    @Override
    @Transactional
    public AirCompany newAirCompany(AirCompany airCompany) {
        AirCompany airCompany1=airCompanyRepository.save(airCompany);
        return airCompany1;
    }

    @Override
    @Transactional
    public List<AirCompany> findByName(String name) {
        List<AirCompany> airCompanyList = airCompanyRepository.findByName(name);
        return airCompanyList;
    }


    @Override
    @Transactional
    public AirCompany getAirCompanyForAdminId(Long id) {
        AirCompany airCompany = airCompanyRepository.getAirCompanyForAdminId(id);
        return airCompany;
    }

    @Override
    @Transactional
    public AirCompany findAirCompanyById(Long idAirCompany) {
        AirCompany airCompany = airCompanyRepository.findAirCompanyById(idAirCompany);
        return airCompany;
    }

    @Override
    @Transactional
    public Airplane findByIdAndUpdateFleet(long id, Airplane airplaneWithId) {
        AirCompany airCompany = airCompanyRepository.findAirCompanyById(id);
        airCompany.getFleet().add(airplaneWithId);
        airplaneWithId.setAirCompany(airCompany);
        airplaneWithId.setAirCompany(airCompanyRepository.save(airCompany));
        return airplaneWithId;
    }

    @Override
    @Transactional
    public AirCompany findByAirplaneId(Long airplaneId) {
        AirCompany airCompany = airCompanyRepository.findByAirplaneId(airplaneId);
        return airCompany;
    }
}

