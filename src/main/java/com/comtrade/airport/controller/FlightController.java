package com.comtrade.airport.controller;

import com.comtrade.airport.facade.FlightFacade;
import com.comtrade.airport.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

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

    @GetMapping("/checkAvailableTermin/{id}/{date}")
    public ResponseEntity<?> checkAvailableTermin(@PathVariable(value = "id")Long id,@PathVariable(value = "date")String date) throws ParseException {
        String dateForSerach = date;
        boolean isAvailable = flightService.checkDepartureTermin(id,date);
        return new ResponseEntity<Boolean>(isAvailable,HttpStatus.OK);
    }


}
