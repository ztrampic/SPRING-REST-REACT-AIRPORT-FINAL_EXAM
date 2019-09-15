package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.mapper.AirplaneMapper;
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
    private final AirplaneMapper airplaneMapper;

    @Autowired
    public AirplaneController(AirplaneService airplaneService, AirplaneMapper airplaneMapper) {
        this.airplaneService = airplaneService;
        this.airplaneMapper = airplaneMapper;
    }

    @PostMapping("/insert")
    public ResponseEntity<?>insertAirplane(@RequestBody AirplaneDTO airplaneDto){
        try {
            Airplane airplane = airplaneMapper.convertDTOtoEntity(airplaneDto);
            airplaneService.insertNewAirplane(airplane);
            return new ResponseEntity<AirplaneDTO>(HttpStatus.OK);
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
