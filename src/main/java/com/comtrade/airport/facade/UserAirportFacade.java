package com.comtrade.airport.facade;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.dto.UserAirportDTO;
import com.comtrade.airport.entity.UserAirport;
import com.comtrade.airport.mapper.UserAirportMapper;
import com.comtrade.airport.service.UserAirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAirportFacade {
    private final UserAirportService userAirportService;
    private final UserAirportMapper userAirportMapper;
    @Autowired
    public UserAirportFacade(UserAirportService userAirportService, UserAirportMapper userAirportMapper) {
        this.userAirportService = userAirportService;
        this.userAirportMapper = userAirportMapper;
    }

    public UserAirportDTO getUserOfApplicationAirport(Long id) {
        UserAirport userAirport = userAirportService.getUserAirport(id);
        UserAirportDTO userAirportDTO = userAirportMapper.convertUserAirportToUserAirportDTO(userAirport);
        return userAirportDTO;
    }

    public UserAirportDTO updateUserOfApplication(UserAirportDTO userAirportDTO) {
        Long idAirport = userAirportService.getIdAirportForIdUserairport(Long.parseLong(userAirportDTO.getId()));
        AirportDTO airportDTO = new AirportDTO();
        airportDTO.setId(String.valueOf(idAirport));
        userAirportDTO.setAirportDTO(airportDTO);
        UserAirport userAirport = userAirportMapper.convertUserAirportDTOtoUserAirport(userAirportDTO);
        UserAirport userAirportResponse = userAirportService.updateUserAirport(userAirport);
        userAirportDTO = userAirportMapper.convertUserAirportToUserAirportDTO(userAirportResponse);
        return userAirportDTO;
    }

    public UserAirportDTO insertUserFirstTime(UserAirportDTO userAirportDTO) {
        UserAirport userAirportConverted = userAirportMapper.convertUserAirportDTOtoUserAirport(userAirportDTO);
        UserAirport userAirport = userAirportService.saveFirstTime(userAirportConverted);
        UserAirportDTO userAirportDTOResponse = userAirportMapper.convertUserAirportToUserAirportDTO(userAirport);
        return userAirportDTOResponse;
    }
}
