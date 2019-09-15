package com.comtrade.airport.controller;

import com.comtrade.airport.dto.FlightRequestDTO;
import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.mapper.FlightRequestMapper;
import com.comtrade.airport.service.FlightRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/flightRequest")
@CrossOrigin
public class FlightRequestController {

    private final FlightRequestService flightRequestService;
    private final FlightRequestMapper flightRequestMapper;

    @Autowired
    public FlightRequestController(FlightRequestService flightRequestService, FlightRequestMapper flightRequestMapper) {
        this.flightRequestService = flightRequestService;
        this.flightRequestMapper = flightRequestMapper;
    }

    @PostMapping("/insertNewFR")
    public ResponseEntity<?>insertNewFlightRequest(@RequestBody FlightRequestDTO flightRequestDTO){
        FlightRequest flightRequest = flightRequestMapper.convertDTOtoEntity(flightRequestDTO);
        flightRequestService.insertNewFR(flightRequest);
        return new ResponseEntity<String>(HttpStatus.OK);
    }
    @GetMapping("/getAll")
    public ResponseEntity<?>getAllFR(){
        List<FlightRequest> list = flightRequestService.getAll();
        List<FlightRequestDTO> listDtos = flightRequestMapper.convertToListDTOs(list);
        return new ResponseEntity<List<FlightRequest>>(list, HttpStatus.OK);
    }

}
