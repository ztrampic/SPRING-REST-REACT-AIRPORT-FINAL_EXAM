package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.dto.responseLogin.ResponseMessage;
import com.comtrade.airport.facade.AirCompanyFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import java.util.Set;

@RestController
@RequestMapping("api/airCompany")
@CrossOrigin
public class AirCompanyController {

    private final AirCompanyFacade airCompanyFacade;
    @Autowired
    public AirCompanyController(AirCompanyFacade airCompanyFacade) {
        this.airCompanyFacade = airCompanyFacade;
    }

    @PostMapping("/searchByName")
    public ResponseEntity<?>searchAirCompanyByName(@RequestBody String name){
        try{
            Set<AirCompanyDTO>airCompanyDTOS = airCompanyFacade.findByName(name);
            return new ResponseEntity<Set<AirCompanyDTO>>(airCompanyDTOS,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<Set<AirCompanyDTO>>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/insertAirCompanyUser")
    public ResponseEntity<?>addUserAirCompany(@RequestBody AirportAdminSearchDTO newAirCompany){
        try {
            airCompanyFacade.insertUserAirCompany(newAirCompany);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/insertAdminAccount/{id}")
    public ResponseEntity<?>addAdminAccount(@PathVariable(value = "id")Long id,@RequestBody SingUpDTO singUpDTO){
        try{
            ResponseMessage response = airCompanyFacade.addNewAdminAccount(id,singUpDTO);
            return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
        }catch (ConstraintViolationException e){
            return new ResponseEntity<>(HttpStatus.PRECONDITION_REQUIRED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    /* GET AIRCOMPANY FOR ADMIN ID */

    @GetMapping("/getInfo/{id}")
    public ResponseEntity<?>getAirCompanyInfo(@PathVariable(value = "id")Long id){
       try{
           AirCompanyDTO airCompanyDTO = airCompanyFacade.getAirCompanyForAdminId(id);
           return new ResponseEntity<AirCompanyDTO>(airCompanyDTO,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }
    @GetMapping("/getAllFlights/{id}")
    public ResponseEntity<?>getFlights(@PathVariable(value = "id")Long id){
        try {
           Set<FlightDTO> flightDTOS = airCompanyFacade.getAllFlights(id);
            return new ResponseEntity<Set<FlightDTO>>(flightDTOS,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
