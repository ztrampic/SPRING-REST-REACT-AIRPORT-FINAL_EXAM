package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.dto.responseLogin.ResponseMessage;
import com.comtrade.airport.repository.UserRepository;
import com.comtrade.airport.service.AirCompanyService;
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

    private final UserRepository userRepository;
    private final AirCompanyService airCompanyService;
    @Autowired
    public AirCompanyController(UserRepository userRepository, AirCompanyService airCompanyService) {

        this.userRepository = userRepository;
        this.airCompanyService = airCompanyService;
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
    public ResponseEntity<?>addAdminAccount(@PathVariable(value = "id")Long id,@RequestBody SingUpDTO singUpDTO){
        if (userRepository.existsByEmail(singUpDTO.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }
        try{
            airCompanyService.addNewAdminAccount(id,singUpDTO);
            return new ResponseEntity<String>(HttpStatus.OK);
        }catch (ConstraintViolationException e){
            return new ResponseEntity<>(HttpStatus.PRECONDITION_REQUIRED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    /* GET AIRCOMPANY FOR ADMIN ID */

    @GetMapping("/getInfo/{id}")
    public ResponseEntity<?>getAirCompanyInfo(@PathVariable(value = "id")Long id){
        AirCompanyDTO airCompanyDTO = airCompanyService.getAirCompanyForAdminId(id);
        return new ResponseEntity<AirCompanyDTO>(airCompanyDTO,HttpStatus.OK);
    }
}
