package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.mapper.AirCompanyMapper;
import com.comtrade.airport.service.AirCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/airCompany")
@CrossOrigin
public class AirCompanyController {
    private final AirCompanyService airCompanyService;
    private final AirCompanyMapper airCompanyMapper;
    @Autowired
    public AirCompanyController(AirCompanyService airCompanyService, AirCompanyMapper airCompanyMapper) {
        this.airCompanyService = airCompanyService;
        this.airCompanyMapper = airCompanyMapper;
    }
    @PostMapping("/searchByName")
    public ResponseEntity<?>searchAirCompanyByName(@RequestBody String name){
        try{
            Set<AirCompanyDTO>airCompanyDTOS = airCompanyService.findByName(name);
            return new ResponseEntity<Set<AirCompanyDTO>>(airCompanyDTOS,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<Set<AirCompanyDTO>>(HttpStatus.OK);
        }

    }
    @PostMapping("/insertAirCompanyUser")
    public ResponseEntity<?>addUserAirCompany(@RequestBody AirportAdminSearchDTO newAirCompany){
        try {
            airCompanyService.insertUserAirCompany(newAirCompany);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/insertAdminAccount/{id}")
    public ResponseEntity<?>addAdminAccount(@PathVariable(value = "id")Long id, @RequestBody SingUpDTO singUpDTO){
        try{
            airCompanyService.addNewAdminAccount(id,singUpDTO);
            return new ResponseEntity<String>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
