package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.facade.AirportFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/airport")
@CrossOrigin
public class AirportController {

    private final AirportFacade airportFacade;
    @Autowired
    public AirportController(AirportFacade airportFacade) {
        this.airportFacade = airportFacade;
    }

    @PostMapping("/iniEntry")
    public ResponseEntity<?>pocetniUnosAerodroma(@RequestBody List<AirportDTO> listaAerodromaJSON){
        try{
            List<AirportDTO>airportDTOList = airportFacade.newAirportsList(listaAerodromaJSON);
            return new ResponseEntity<List<AirportDTO>>(airportDTOList ,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/airportEntry")
    public ResponseEntity<List<AirportDTO>>airportEntry(@RequestBody AirportDTO airportDTO){
        try{
            List<AirportDTO>listDTO = airportFacade.newAirport(airportDTO);
            return new ResponseEntity<List<AirportDTO>>(listDTO,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAllAirports")
    public ResponseEntity<?>getAllAirports(){
        try{
            List<AirportDTO>listAirportsDTO = airportFacade.getAllAirports();
            return new ResponseEntity<List<AirportDTO>>(listAirportsDTO,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/getSearchAirports")
    public ResponseEntity<?>getSearchAirports(@RequestBody AirportDTO airportDTO){
       try {
           List<AirportDTO>searchListDTO = airportFacade.getSearchAirports(airportDTO);
           return new ResponseEntity<List<AirportDTO>>(searchListDTO,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }

    @PutMapping("/updateAirport")
    public ResponseEntity<?>updateAirport(@RequestBody AirportDTO airportDTO){
       try{
           List<AirportDTO>listDto = airportFacade.updateAirportAndGetAll(airportDTO);
           return new ResponseEntity<List<AirportDTO>>(listDto,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }

    @GetMapping("/hardDeleteAirport/{id}")
    public ResponseEntity<?>hardDeleteAirport(@PathVariable(value = "id") String id){
       try{
           List<AirportDTO> listDTO = airportFacade.hardDeleteAirportAndGetAll(id);
           return new ResponseEntity<List<AirportDTO>>(listDTO,HttpStatus.OK);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }

    @PostMapping("/searchByCity")
    public ResponseEntity<List<AirportAdminSearchDTO>>searchByCity(@RequestBody String searchString){
        try{
            List<AirportAdminSearchDTO> searchListDto = airportFacade.searchAirportByCity(searchString);
            return new ResponseEntity<List<AirportAdminSearchDTO>>(searchListDto,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
