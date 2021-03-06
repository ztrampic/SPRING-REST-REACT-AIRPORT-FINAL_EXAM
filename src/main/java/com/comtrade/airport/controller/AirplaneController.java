package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.facade.AirplaneFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/airplane")
@CrossOrigin
public class AirplaneController {

    private final AirplaneFacade airplaneFacade;

    @Autowired
    public AirplaneController(AirplaneFacade airplaneFacade) {
        this.airplaneFacade = airplaneFacade;
    }

    @PostMapping("/insert")
    public ResponseEntity<?>insertAirplane(@RequestBody AirplaneDTO airplaneDto){
        try {
            AirplaneDTO newAirplaneDTO = airplaneFacade.insertNewAirplane(airplaneDto);
            return new ResponseEntity<AirplaneDTO>(newAirplaneDTO,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<AirplaneDTO>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAllAirplanes/{id}")
    public ResponseEntity<?>getAllAirplanesForId(@PathVariable Long id){
        try {
            List<AirplaneDTO> listAirplandeDTO = airplaneFacade.getAllForId(id);
            return new ResponseEntity<List<AirplaneDTO>>(listAirplandeDTO, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/deleteAndGetRest/{id}")
    public ResponseEntity<?>deleteAndGetRest(@PathVariable Long id){
        Set<AirplaneDTO> airplaneDTOS =  airplaneFacade.deleteAndGetRest(id);
        return new ResponseEntity<Set<AirplaneDTO>>(airplaneDTOS,HttpStatus.OK);
    }
}
