package com.comtrade.airport.controller.auth;

import com.comtrade.airport.dto.*;
import com.comtrade.airport.dto.responseLogin.JwtResponse;
import com.comtrade.airport.dto.responseLogin.ResponseMessage;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.facade.AirCompanyFacade;
import com.comtrade.airport.facade.AirportFacade;
import com.comtrade.airport.facade.FlightFacade;
import com.comtrade.airport.facade.UserAirportFacade;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.repository.UserRepository;
import com.comtrade.airport.security.jwt1.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class PublicController {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    private final UserMapper userMapper;
    private final UserAirportFacade userAirportFacade;
    private final AirportFacade airportFacade;
    private final AirCompanyFacade airCompanyFacade;
    private final FlightFacade flightFacade;
    @Autowired
    public PublicController(AuthenticationManager authenticationManager,
                            UserRepository userRepository, JwtProvider jwtProvider, UserMapper userMapper,
                            UserAirportFacade userAirportFacade, AirportFacade airportFacade, AirCompanyFacade airCompanyFacade, FlightFacade flightFacade) {

        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
        this.userMapper = userMapper;
        this.userAirportFacade = userAirportFacade;
        this.airportFacade = airportFacade;
        this.airCompanyFacade = airCompanyFacade;
        this.flightFacade = flightFacade;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDTO loginDTO){
       Authentication authentication = authenticationManager.authenticate(
               new UsernamePasswordAuthenticationToken(
                       loginDTO.getUsername(),
                       loginDTO.getPassword()
               )
       );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(),userDetails.getAuthorities()));
    }
    @PostMapping("/singup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SingUpDTO singUpDTO) {
        if (userRepository.existsByUsername(singUpDTO.getUsername())) {
        return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                HttpStatus.BAD_REQUEST);
    }
         if (userRepository.existsByEmail(singUpDTO.getEmail())) {
        return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                HttpStatus.BAD_REQUEST);
    }
         User user = userMapper.convertSingUpDTOtoUser(singUpDTO);
         userRepository.save(user);

        return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }

    @GetMapping("/getUserOfApplication/{id}")
    public ResponseEntity<UserAirportDTO> getUserOfApplication(@PathVariable Long id) {
        try {
            UserAirportDTO userAirportDTO = userAirportFacade.getUserOfApplicationAirport(id);
            return new ResponseEntity<UserAirportDTO>(userAirportDTO, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
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

    @PostMapping("/iniEntryAirCompany")
    public ResponseEntity<?>pocetniUnosAviokompanija(@RequestBody List<AirCompanyDTO> companyDTOList){
        try{
            List<AirCompanyDTO> listAirCompanyDTOwithIds = airCompanyFacade.iniEntryAirCompanies(companyDTOList);
            return new ResponseEntity<List<AirCompanyDTO>>(listAirCompanyDTOwithIds,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PostMapping("/getFirstFiveDepartureFlights/{id}")
    public ResponseEntity<?>getFirstFiveDepartureFlights(@PathVariable(value = "id")Long id,@RequestBody FlightDTO flightDTO){
        Set<FlightDTO> firstFiveDeparture = flightFacade.getFiveDepartureFlights(id,flightDTO);
        return new ResponseEntity<Set<FlightDTO>>(firstFiveDeparture,HttpStatus.OK);
    }


}
