package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.mapper.AirportMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/airport")
@CrossOrigin
public class AirportController {

    private final AirportMapper airportMapper;
    @Autowired
    public AirportController(AirportMapper airportMapper) {
        this.airportMapper = airportMapper;
    }

    @PostMapping("/iniEntry")
    public ResponseEntity<?>pocetniUnosAerodroma(@RequestBody List<AirportDTO> listaAerodromaJSON){
        List<Airport> listaSaIdAerodroma= new ArrayList<>();
        for(AirportDTO a: listaAerodromaJSON){
            Airport airport  = airportMapper.convertAirportDTOtoAirport(a);
            listaSaIdAerodroma.add(airport);
        }
        List<AirportDTO>listaForFront = new ArrayList<>();
        for (Airport air : listaSaIdAerodroma){
            AirportDTO airportDTO = airportMapper.convertAirportToAirportDTO(air);
            listaForFront.add(airportDTO);
        }
        return new ResponseEntity<List<AirportDTO>>(listaForFront ,HttpStatus.OK);
    }

    



}
