package com.comtrade.airport.facade;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.dto.responseLogin.ResponseMessage;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.mapper.AirCompanyMapper;
import com.comtrade.airport.mapper.AirportMapper;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.service.AirCompanyService;
import com.comtrade.airport.service.AirportService;
import com.comtrade.airport.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AirCompanyFacade {

    private final AirCompanyService airCompanyService;
    private final AirCompanyMapper airCompanyMapper;
    private final AirportService airportService;
    private final AirportMapper airportMapper;
    private final UserService userService;
    private final UserMapper userMapper;
    @Autowired
    public AirCompanyFacade(AirCompanyService airCompanyService, AirCompanyMapper airCompanyMapper, AirportService airportService, AirportMapper airportMapper, UserService userService, UserMapper userMapper) {
        this.airCompanyService = airCompanyService;
        this.airCompanyMapper = airCompanyMapper;
        this.airportService = airportService;
        this.airportMapper = airportMapper;
        this.userService = userService;
        this.userMapper = userMapper;
    }

    public Set<AirCompanyDTO> findByName(String name) {
            List<AirCompany> airCompanyList = airCompanyService.findByName(name);
            Set<AirCompanyDTO>airCompanyDTOS = airCompanyMapper.convertToSetDTOs(airCompanyList);
        return airCompanyDTOS;
    }

    public void insertUserAirCompany(AirportAdminSearchDTO newAirCompany) {
        AirportDTO airportDTO = newAirCompany.getAirportDTO();
        Airport airport = airportService.findById(Long.parseLong(airportDTO.getId()));
        Long idAirCompany = Long.parseLong(newAirCompany.getDistance());
        AirCompany airCompany = airCompanyService.findAirCompanyById(idAirCompany);
        airport.addAirCompany(airCompany);
        List<Airport> airportList = airportService.updateAirport(airport);
    }

       public ResponseMessage addNewAdminAccount(Long id, SingUpDTO singUpDTO) {
           if (userService.existsByEmail(singUpDTO.getEmail())) {
               return new ResponseMessage("Fail -> Email is already in use!");
             }
           if (userService.existsByUsername(singUpDTO.getUsername())) {
               return new ResponseMessage("Fail -> Username is already in use!");
             }
               String asd = "airportAdmin";
               Set<String>role = new HashSet<>();
               role.add(asd);
               singUpDTO.setRole(role);
               User user = userMapper.convertSingUpDTOtoUser(singUpDTO);
               User userWithId = userService.save(user);
               AirCompany airCompany = airCompanyService.findAirCompanyById(id);
               airCompany.getSetUsers().add(userWithId);
               AirCompany newAirCompany = airCompanyService.newAirCompany(airCompany);
           return new ResponseMessage("Succes -> Admin Account added");
       }

    public AirCompanyDTO getAirCompanyForAdminId(Long id) {
            AirCompany airCompany = airCompanyService.getAirCompanyForAdminId(id);
            AirCompanyDTO airCompanyDTO = airCompanyMapper.convertToDTO(airCompany);
            Set<AirportDTO>airportDTOSet = airportMapper.convertSetToDTOSet(airCompany.getAirportList());
            airCompanyDTO.setAirportList(airportDTOSet);
        return airCompanyDTO;
    }

    public List<AirCompanyDTO> iniEntryAirCompanies(List<AirCompanyDTO> companyDTOList) {
        List<AirCompany>airCompanyList = new ArrayList<>();
        for(AirCompanyDTO airCompanyDTO:companyDTOList){
            AirCompany airCompany = airCompanyMapper.convertToEntity(airCompanyDTO);
            airCompany = airCompanyService.newAirCompany(airCompany);
            airCompanyList.add(airCompany);
         }
        List<AirCompanyDTO>listAirCompanyDTOwithIds = new ArrayList<>();
        for(AirCompany airCompany:airCompanyList){
            AirCompanyDTO airCompanyDTO = airCompanyMapper.convertToDTO(airCompany);
            listAirCompanyDTOwithIds.add(airCompanyDTO);
         }
        return listAirCompanyDTOwithIds;
    }
}
