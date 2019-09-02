package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.UserAirportDTO;
import com.comtrade.airport.entity.UserAirport;

public interface UserAirportMapper {

    UserAirport convertUserAirportDTOtoUserAirport(UserAirportDTO userAirportDTO);
    UserAirportDTO convertUserAirportToUserAirportDTO(UserAirport userAirport);
}
