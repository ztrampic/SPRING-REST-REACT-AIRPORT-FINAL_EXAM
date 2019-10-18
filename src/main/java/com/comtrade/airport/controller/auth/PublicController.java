package com.comtrade.airport.controller.auth;

import com.comtrade.airport.dto.*;
import com.comtrade.airport.dto.responseLogin.JwtResponse;
import com.comtrade.airport.dto.responseLogin.ResponseMessage;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.entity.UserAirport;
import com.comtrade.airport.mapper.AirCompanyMapper;
import com.comtrade.airport.mapper.AirportMapper;
import com.comtrade.airport.mapper.UserAirportMapper;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.repository.UserRepository;
import com.comtrade.airport.security.jwt1.JwtProvider;
import com.comtrade.airport.security.services.RoleService;
import com.comtrade.airport.service.AirCompanyService;
import com.comtrade.airport.service.AirportService;
import com.comtrade.airport.service.UserAirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class PublicController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleService roleService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserAirportService userAirportService;
    @Autowired
    private UserAirportMapper userAirportMapper;
    @Autowired
    private AirportService airportService;
    @Autowired
    private AirportMapper airportMapper;
    @Autowired
    private AirCompanyMapper airCompanyMapper;
    @Autowired
    private AirCompanyService airCompanyService;



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
    public ResponseEntity<UserAirportDTO> getUserOfApplication(@PathVariable Long id){
        UserAirport userAirport = userAirportService.getUserAirport(id);
        UserAirportDTO userAirportDTO = userAirportMapper.convertUserAirportToUserAirportDTO(userAirport);
        return new ResponseEntity<UserAirportDTO>(userAirportDTO, HttpStatus.OK);
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

    @PostMapping("/iniEntryAirCompany")
    public ResponseEntity<?>pocetniUnosAviokompanija(@RequestBody List<AirCompanyDTO> companyDTOList){
        List<AirCompany>airCompanyList = new ArrayList<>();
        for(AirCompanyDTO airCompanyDTO:companyDTOList){
            AirCompany airCompany = airCompanyMapper.convertToEntity(airCompanyDTO);
            airCompany = airCompanyService.newAirCompany(airCompany);
            airCompanyList.add(airCompany);
        }
        List<AirCompanyDTO>listAirCompanyDTOwithIds = new ArrayList<>();
        for(AirCompany airCompany:airCompanyList){
            AirCompanyDTO airCompanyDTO = airCompanyMapper.convertToDTO(airCompany);
            listAirCompanyDTOwithIds.add(airCompanyDTO);
        }
        return new ResponseEntity<List<AirCompanyDTO>>(listAirCompanyDTOwithIds,HttpStatus.OK);
    }


}
