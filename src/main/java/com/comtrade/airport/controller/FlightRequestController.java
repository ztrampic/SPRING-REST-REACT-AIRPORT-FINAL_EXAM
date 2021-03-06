package com.comtrade.airport.controller;

import com.comtrade.airport.dto.FlightRequestDTO;
import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.facade.FlightRequestFacade;
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
    private final FlightRequestFacade flightRequestFacade;

    @Autowired
    public FlightRequestController(FlightRequestService flightRequestService, FlightRequestMapper flightRequestMapper, FlightRequestFacade flightRequestFacade) {
        this.flightRequestService = flightRequestService;
        this.flightRequestMapper = flightRequestMapper;
        this.flightRequestFacade = flightRequestFacade;
    }

    @PostMapping("/insertNewFR")
    public ResponseEntity<?>insertNewFlightRequest(@RequestBody FlightRequestDTO flightRequestDTO){
      try{
          flightRequestFacade.insertNewFilghtRequest(flightRequestDTO);
          return new ResponseEntity<>(HttpStatus.OK);
      }catch (Exception e){
          return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?>getAllFR(){
       try{
           List<FlightRequestDTO> listDtos = flightRequestFacade.getAllFR();
           return new ResponseEntity<List<FlightRequestDTO>>(listDtos, HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }
    @GetMapping("/getAllPennding")
    public ResponseEntity<?>getAllPendding(){
       try {
           List<FlightRequestDTO>flightRequestDTOS = flightRequestFacade.getAllPendingRequests();
           return  new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS,HttpStatus.OK);
       }catch (Exception e){
           return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
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
    @GetMapping("/declineFlightRequest/{id}")
    public ResponseEntity<?>declineFlightRequest(@PathVariable(value = "id") Long id){
       try {
           flightRequestService.declineFlightRequest(id);
           return new ResponseEntity<>(HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }

    @GetMapping("/approve/{id}")
    public ResponseEntity<?>approveFlightRequest(@PathVariable(value = "id")Long id){
       try{
           flightRequestService.approveFlightRequest(id);
           return new ResponseEntity<>(HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?>deleteFlightRequest(@PathVariable(value = "id")Long id){
        try {
            flightRequestService.deleteFlightRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/acceptFlightRequest/{id}")
    public ResponseEntity<?>acceptFlightRequest(@PathVariable(value = "id") Long id){
        List<FlightRequest>flightRequestList = flightRequestService.acceptFlightRequst(id);
        List<FlightRequestDTO>flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequestList);
        return new ResponseEntity<List<FlightRequestDTO>>(flightRequestDTOS,HttpStatus.OK);
    }


}
