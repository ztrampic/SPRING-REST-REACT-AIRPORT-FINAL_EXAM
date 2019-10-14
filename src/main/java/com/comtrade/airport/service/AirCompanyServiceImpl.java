package com.comtrade.airport.service;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.mapper.AirCompanyMapper;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.repository.AirCompanyRepository;
import com.comtrade.airport.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AirCompanyServiceImpl implements AirCompanyService{

    private final AirCompanyRepository airCompanyRepository;
    private final AirCompanyMapper airCompanyMapper;
    private final AirportService airportService;
    private final UserMapper userMapper;
    private final UserRepository userRepository;

    @Autowired
    public AirCompanyServiceImpl(AirCompanyRepository airCompanyRepository, AirCompanyMapper airCompanyMapper, AirportService airportService, UserMapper userMapper, UserRepository userRepository) {
        this.airCompanyRepository = airCompanyRepository;
        this.airCompanyMapper = airCompanyMapper;
        this.airportService = airportService;
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public AirCompany newAirCompany(AirCompany airCompany) {
        AirCompany airCompany1=airCompanyRepository.save(airCompany);
        return airCompany1;
    }

    @Override
    @Transactional
    public Set<AirCompanyDTO> findByName(String name) {
        List<AirCompany> airCompanyList = airCompanyRepository.findByName(name);
        Set<AirCompanyDTO> airCompanyDTOSet = airCompanyMapper.convertToSetDTOs(airCompanyList);
        return airCompanyDTOSet;
    }

    @Override
    @Transactional
    public void insertUserAirCompany(AirportAdminSearchDTO newAirCompany) {
        AirportDTO airportDTO = newAirCompany.getAirportDTO();
        Airport airport = airportService.findById(Long.parseLong(airportDTO.getId()));
        Long idAirCompany = Long.parseLong(newAirCompany.getDistance());
        AirCompany airCompany = airCompanyRepository.findAirCompanyById(idAirCompany);
        airport.addAirCompany(airCompany);
        List<Airport> airportList = airportService.updateAirport(airport);
    }

    @Override
    @Transactional
    public void addNewAdminAccount(Long id, SingUpDTO singUpDTO) {
        String asd = "airportAdmin";
        Set<String>role = new HashSet<>();
        role.add(asd);
        singUpDTO.setRole(role);
        User user = userMapper.convertSingUpDTOtoUser(singUpDTO);
        User userWithId = userRepository.save(user);
        AirCompany airCompany = airCompanyRepository.findAirCompanyById(id);
        airCompany.getSetUsers().add(userWithId);
        airCompanyRepository.save(airCompany);
    }
}

