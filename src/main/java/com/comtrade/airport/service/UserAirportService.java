package com.comtrade.airport.service;

import com.comtrade.airport.entity.UserAirport;

public interface UserAirportService {
    UserAirport getUserAirport(Long id);

    UserAirport updateUserAirport(UserAirport userAirport);

    Long getIdAirportForIdUserairport(long parseLong);

    UserAirport saveFirstTime(UserAirport userAirportConverted);
}
