package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.dto.UserAirportDTO;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.entity.UserAirport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Component
public class UserAirportMapperImpl implements UserAirportMapper{

    private final AirportMapper airportMapper;
    @Autowired
    public UserAirportMapperImpl(AirportMapper airportMapper) {
        this.airportMapper = airportMapper;
    }

    @Override
    public UserAirport convertUserAirportDTOtoUserAirport(UserAirportDTO userAirportDTO) {
        AirportDTO airportDTO = userAirportDTO.getAirportDTO();
        Airport airport = airportMapper.convertAirportDTOtoAirport(airportDTO);
        Long idUserAirport = Long.parseLong(userAirportDTO.getId());
        String description = userAirportDTO.getDescription();
        String phoneNumber = userAirportDTO.getPhoneNumber();
        String contact = userAirportDTO.getContact();
        String companyName = userAirportDTO.getCompanyName();
        UserAirport userAirport = new UserAirport();
        userAirport.setIdUserAirport(idUserAirport);
        userAirport.setAirport(airport);
        userAirport.setDescription(description);
        userAirport.setPhoneNumber(phoneNumber);
        userAirport.setContact(contact);
        userAirport.setCompanyName(companyName);
        return userAirport;
    }

    @Override
    public UserAirportDTO convertUserAirportToUserAirportDTO(UserAirport userAirport) {
        AirportDTO airportDTO = new AirportDTO();
        airportDTO.setId(String.valueOf(userAirport.getAirport().getId()));
        String id  = String.valueOf(userAirport.getIdUserAirport());
        String description = userAirport.getDescription();
        String phoneNumber = userAirport.getPhoneNumber();
        String contact = userAirport.getContact();
        String companyName = userAirport.getCompanyName();
        UserAirportDTO userAirportDTO = new UserAirportDTO();
        userAirportDTO.setId(id);
        userAirportDTO.setAirportDTO(airportDTO);
        userAirportDTO.setDescription(description);
        userAirportDTO.setPhoneNumber(phoneNumber);
        userAirportDTO.setContact(contact);
        userAirportDTO.setCompanyName(companyName);
        return userAirportDTO;
    }
}
