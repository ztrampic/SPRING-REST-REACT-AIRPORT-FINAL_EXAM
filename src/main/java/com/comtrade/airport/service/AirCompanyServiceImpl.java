package com.comtrade.airport.service;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.mapper.AirCompanyMapper;
import com.comtrade.airport.repository.AirCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AirCompanyServiceImpl implements AirCompanyService{

    private final AirCompanyRepository airCompanyRepository;
    private final AirCompanyMapper airCompanyMapper;

    @Autowired
    public AirCompanyServiceImpl(AirCompanyRepository airCompanyRepository, AirCompanyMapper airCompanyMapper) {
        this.airCompanyRepository = airCompanyRepository;
        this.airCompanyMapper = airCompanyMapper;
    }

    @Override
    @Transactional
    public AirCompany newAirCompany(AirCompany airCompany) {
        AirCompany airCompany1=airCompanyRepository.save(airCompany);
        return airCompany1;
    }
}
