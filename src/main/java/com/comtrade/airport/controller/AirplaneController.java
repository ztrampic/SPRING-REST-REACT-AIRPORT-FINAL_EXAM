package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.service.AirplaneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/airplane")
@CrossOrigin
public class AirplaneController {

    private final AirplaneService airplaneService;

    @Autowired
    public AirplaneController( AirplaneService airplaneService) {
        this.airplaneService = airplaneService;

    }

    @PostMapping("/insert")
    public ResponseEntity<?>insertAirplane(@RequestBody AirplaneDTO airplaneDto){
        try {
            AirplaneDTO newAirplaneDTO = airplaneService.insertNewAirplane(airplaneDto);
            return new ResponseEntity<AirplaneDTO>(newAirplaneDTO,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<AirplaneDTO>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAllAirplanes/{id}")
    public ResponseEntity<?>getAllAirplanesForId(@PathVariable Long id){
        try {
            List<AirplaneDTO> listAirplandeDTO = airplaneService.getAllForId(id);
            return new ResponseEntity<List<AirplaneDTO>>(listAirplandeDTO, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }
}
