package com.comtrade.airport.controller;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.dto.UserAirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.UserAirport;
import com.comtrade.airport.mapper.UserAirportMapper;
import com.comtrade.airport.service.AirportService;
import com.comtrade.airport.service.UserAirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/userAirport")
@CrossOrigin
public class UserAirportController {

    private final UserAirportService userAirportService;
    private final UserAirportMapper userAirportMapper;
    private final AirportService airportService;
    @Autowired
    public UserAirportController(UserAirportService userAirportService, UserAirportMapper userAirportMapper, AirportService airportService) {
        this.userAirportService = userAirportService;
        this.userAirportMapper = userAirportMapper;
        this.airportService = airportService;
    }
    @GetMapping("/getUserOfApplication/{id}")
    public ResponseEntity<UserAirportDTO> getUserOfApplication(@PathVariable Long id){
        UserAirport userAirport = userAirportService.getUserAirport(id);
        UserAirportDTO userAirportDTO = userAirportMapper.convertUserAirportToUserAirportDTO(userAirport);
        return new ResponseEntity<UserAirportDTO>(userAirportDTO, HttpStatus.OK);
    }
    @PutMapping("/updateUserOfApplicationData")
    public ResponseEntity<String>updateUserAirport(@RequestBody UserAirportDTO userAirportDTO){
        Long idAirport = userAirportService.getIdAirportForIdUserairport(Long.parseLong(userAirportDTO.getId()));
        AirportDTO airportDTO = new AirportDTO();
        airportDTO.setId(String.valueOf(idAirport));
        userAirportDTO.setAirportDTO(airportDTO);
        UserAirport userAirport = userAirportMapper.convertUserAirportDTOtoUserAirport(userAirportDTO);
        UserAirport userAirportResponse = userAirportService.updateUserAirport(userAirport);
        return new ResponseEntity<String>(HttpStatus.OK);
    }
    @PostMapping("/firstTimeUserOfApplication")
    public ResponseEntity<UserAirportDTO>insertFirstTime(@RequestBody UserAirportDTO userAirportDTO){
        UserAirport userAirportConverted = userAirportMapper.convertUserAirportDTOtoUserAirport(userAirportDTO);
        UserAirport userAirport = userAirportService.saveFirstTime(userAirportConverted);
        UserAirportDTO userAirportDTOResponse = userAirportMapper.convertUserAirportToUserAirportDTO(userAirport);
        return new ResponseEntity<UserAirportDTO>(userAirportDTOResponse,HttpStatus.OK);
    }


}
