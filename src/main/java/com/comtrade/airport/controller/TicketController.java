package com.comtrade.airport.controller;

import com.comtrade.airport.dto.TicketValueDTO;
import com.comtrade.airport.enums.TicketType;
import com.comtrade.airport.facade.TicketFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/ticket")
@CrossOrigin
public class TicketController {

    private final TicketFacade ticketFacade;
    @Autowired
    public TicketController(TicketFacade ticketFacade) {
        this.ticketFacade = ticketFacade;
    }

    @GetMapping("/getTicketTypes")
    public ResponseEntity<?> getAllTypes(){
        List<String> stringList = getAllTicketTypes();
        return new ResponseEntity<List<String>>(stringList, HttpStatus.OK);
    }
    @PostMapping("/addNewTicketValue")
    public ResponseEntity<?> addNewTicketValue(@RequestBody TicketValueDTO ticketValueDTO){
        TicketValueDTO valueDTO = ticketValueDTO;
        ticketFacade.addNewTicketValue(ticketValueDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/getAllTicketValues/{id}")
    public ResponseEntity<?> getAllTicketValues(@PathVariable(value = "id")Long id){
       try {
           Set<TicketValueDTO> ticketValueDTOS = ticketFacade.getAllTicketValuesForFlight(id);
           return new ResponseEntity<Set<TicketValueDTO>>(ticketValueDTOS,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }


    public List<String> getAllTicketTypes(){
        List<String> allTypes = new ArrayList<>();
        allTypes.add(String.valueOf(TicketType.FIRST_CLASS));
        allTypes.add(String.valueOf(TicketType.ECONOMY_CLASS));
        allTypes.add(String.valueOf(TicketType.BUSSNIS_CLASS));
        return allTypes;
    }
}
