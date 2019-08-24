package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.mapper.AirportMapper;
import com.comtrade.airport.service.AirportService;
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
    private final AirportService airportService;
    @Autowired
    public AirportController(AirportMapper airportMapper, AirportService airportService) {
        this.airportMapper = airportMapper;
        this.airportService = airportService;
    }

    @PostMapping("/iniEntry")
    public ResponseEntity<?>pocetniUnosAerodroma(@RequestBody List<AirportDTO> listaAerodromaJSON){
        List<Airport> listaSaIdAerodroma= new ArrayList<>();
        for(AirportDTO a: listaAerodromaJSON){
            Airport airport  = airportMapper.convertAirportDTOtoAirport(a);
            airport= airportService.newAirport(airport);
            listaSaIdAerodroma.add(airport);
        }
        List<AirportDTO>listaForFront = new ArrayList<>();
        for (Airport air : listaSaIdAerodroma){
            AirportDTO airportDTO = airportMapper.convertAirportToAirportDTO(air);
            listaForFront.add(airportDTO);
        }
        return new ResponseEntity<List<AirportDTO>>(listaForFront ,HttpStatus.OK);
    }
    @PostMapping("/airportEntry")
    public ResponseEntity<?>airportEntry(@RequestBody AirportDTO airportDTO){
        Airport airport = new Airport();
        airport = airportMapper.convertAirportDTOtoAirport(airportDTO);
        airport= airportService.newAirport(airport);
        airportDTO = airportMapper.convertAirportToAirportDTO(airport);
        return new ResponseEntity<AirportDTO>(airportDTO,HttpStatus.OK);
    }

    @GetMapping("/getAllAirports")
    public ResponseEntity<?>getAllAirports(){
        List<AirportDTO>listAirportsDTO = new ArrayList<>();
        List<Airport> listAirports = airportService.getAllAirports();
        for(Airport a: listAirports){
            AirportDTO airportDTO = airportMapper.convertAirportToAirportDTO(a);
            listAirportsDTO.add(airportDTO);
        }

        return new ResponseEntity<List<AirportDTO>>(listAirportsDTO,HttpStatus.OK);
    }
    @PostMapping("/getSearchAirports")
    public ResponseEntity<?>getSearchAirports(@RequestBody AirportDTO airportDTO){
        List<Airport> searchList = new ArrayList<>();
        List<AirportDTO> searchListDTO = new ArrayList<>();
        searchList = airportService.getSearchAirports(airportDTO);
        for(Airport a: searchList){
            AirportDTO airportDTO1 = airportMapper.convertAirportToAirportDTO(a);
            searchListDTO.add(airportDTO1);
        }
        return new ResponseEntity<List<AirportDTO>>(searchListDTO,HttpStatus.OK);
    }
    @PutMapping("/updateAirport")
    public ResponseEntity<?>updateAirport(@RequestBody AirportDTO airportDTO){
        List<AirportDTO> listDto = new ArrayList<>();
        List<Airport>updatedList =new ArrayList<>();
        Airport airport = airportMapper.convertAirportDTOtoAirport(airportDTO);
        updatedList = airportService.updateAirport(airport);
        for(Airport a: updatedList){
            AirportDTO airportDTO1 =airportMapper.convertAirportToAirportDTO(a);
            listDto.add(airportDTO1);
        }
        return new ResponseEntity<List<AirportDTO>>(listDto,HttpStatus.OK);
    }
}
