package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.UserAirportDTO;
import com.comtrade.airport.facade.AirportFacade;
import com.comtrade.airport.facade.UserAirportFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/userAirport")
@CrossOrigin
public class UserAirportController {

    private final UserAirportFacade userAirportFacade;
    private final AirportFacade airportFacade;
    @Autowired
    public UserAirportController(UserAirportFacade userAirportFacade,AirportFacade airportFacade) {
        this.userAirportFacade = userAirportFacade;
        this.airportFacade = airportFacade;
    }
    @GetMapping("/getUserOfApplication/{id}")
    public ResponseEntity<UserAirportDTO> getUserOfApplication(@PathVariable Long id){
        try{
            UserAirportDTO userAirportDTO = userAirportFacade.getUserOfApplicationAirport(id);
            return new ResponseEntity<UserAirportDTO>(userAirportDTO, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PutMapping("/updateUserOfApplicationData")
    public ResponseEntity<UserAirportDTO>updateUserAirport(@RequestBody UserAirportDTO userAirportDTO){
       try{
           UserAirportDTO userAirportDTO1 = userAirportFacade.updateUserOfApplication(userAirportDTO);
           return new ResponseEntity<UserAirportDTO>(userAirportDTO1,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }
    @PostMapping("/firstTimeUserOfApplication")
    public ResponseEntity<UserAirportDTO>insertFirstTime(@RequestBody UserAirportDTO userAirportDTO){
       try{
           UserAirportDTO userAirportDTOResponse = userAirportFacade.insertUserFirstTime(userAirportDTO);
           return new ResponseEntity<UserAirportDTO>(userAirportDTOResponse,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }

    @GetMapping("/getAllUserAirCompany/{id}")
    public ResponseEntity<?>getAllUsersAirCompany(@PathVariable("id")Long id){
        try{
            Set<AirCompanyDTO> airCompanyDTOS = airportFacade.getAllUsersAirCompanysOfAirport(id);
            return new ResponseEntity<Set<AirCompanyDTO>>(airCompanyDTOS,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/deleteUserAirCompany/{id}")
    public ResponseEntity<?>deleteUserAirCompany(@PathVariable(value = "id")Long id, @RequestBody Long idAircompany){
        try{
            Set<AirCompanyDTO>airCompanyDTOS = airportFacade.deleteUserAirCompany(id,idAircompany);
            return new ResponseEntity<Set<AirCompanyDTO>>(airCompanyDTOS,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }



}
