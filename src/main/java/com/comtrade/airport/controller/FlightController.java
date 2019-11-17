package com.comtrade.airport.controller;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.facade.FlightFacade;
import com.comtrade.airport.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Set;

@RestController
@RequestMapping("api/flights")
@CrossOrigin
public class FlightController {

    private final FlightFacade flightFacade;
    private final FlightService flightService;
    @Autowired
    public FlightController(FlightFacade flightFacade, FlightService flightService) {
        this.flightFacade = flightFacade;
        this.flightService = flightService;
    }
    @GetMapping("/getById/{id}")
    public ResponseEntity<?>getFlightById(@PathVariable(value = "id")Long id){
      try{
          FlightDTO flightDTO = flightFacade.getFlightById(id);
          return new ResponseEntity<FlightDTO>(flightDTO,HttpStatus.OK);
      }catch (Exception e){
          return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
    }

    @GetMapping("/checkAvailableTermin/{id}/{date}")
    public ResponseEntity<?> checkAvailableTermin(@PathVariable(value = "id")Long id,@PathVariable(value = "date")String date) throws ParseException {
        boolean isAvailable = flightService.checkDepartureTermin(id,date);
        return new ResponseEntity<Boolean>(isAvailable,HttpStatus.OK);
    }
    @GetMapping("/getAllForDate/{id}/{date}")
    public ResponseEntity<?> getAllForDate(@PathVariable(value = "id")Long id,@PathVariable(value = "date")String date){
        try{
            Set<FlightDTO> flightDTOS = flightFacade.getAllDepartureFlightsForDate(id,date);
            return new ResponseEntity<Set<FlightDTO>>(flightDTOS,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/insertNewFlight")
    public ResponseEntity<?> insertNewFlight(@RequestBody FlightDTO flightDTO){
        try{
            flightFacade.insertNewFlight(flightDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
