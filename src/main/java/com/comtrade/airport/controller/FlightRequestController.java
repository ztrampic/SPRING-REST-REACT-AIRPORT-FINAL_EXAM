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
        List<FlightRequest> flightRequests = flightRequestService.getAll();
        List<FlightRequestDTO> listDtos = flightRequestMapper.convertToListDTOs(flightRequests);
        return new ResponseEntity<List<FlightRequestDTO>>(listDtos, HttpStatus.OK);
    }
    @GetMapping("/getAllPennding")
    public ResponseEntity<?>getAllPendding(){
        List<FlightRequest> flightRequests = flightRequestService.getAllPennding();
        List<FlightRequestDTO> flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequests);
        return  new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS,HttpStatus.OK);
    }
    @GetMapping("/getAllAccepted")
    public ResponseEntity<?>getAllAccepted(){
        List<FlightRequest> flightRequests = flightRequestService.getAllAccepted();
        List<FlightRequestDTO> flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequests);
        return  new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS,HttpStatus.OK);
    }
    @GetMapping("/getAllDeclined")
    public ResponseEntity<?>getAllDeclined() {
        List<FlightRequest> flightRequests = flightRequestService.getAllDeclined();
        List<FlightRequestDTO> flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequests);
        return new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS, HttpStatus.OK);
    }
    @PutMapping("/declineFlightRequest/{id}")
    public ResponseEntity<?>declineFlightRequest(@PathVariable(value = "id") Long id){
        List<FlightRequest>flightRequestList = flightRequestService.declineFlightRequest(id);
        List<FlightRequestDTO>flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequestList);
        return new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS,HttpStatus.OK);
    }
    @PutMapping("/acceptFlightRequest/{id}")
    public ResponseEntity<?>acceptFlightRequest(@PathVariable(value = "id") Long id){
        List<FlightRequest>flightRequestList = flightRequestService.acceptFlightRequst(id);
        List<FlightRequestDTO>flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequestList);
        return new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS,HttpStatus.OK);
    }


}
