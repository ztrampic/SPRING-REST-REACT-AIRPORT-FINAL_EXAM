package com.comtrade.airport.service;

import com.comtrade.airport.entity.UserAirport;
import com.comtrade.airport.repository.UserAirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserAirportServiceImpl implements UserAirportService{
    private final UserAirportRepository userAirportRepository;
    @Autowired
    public UserAirportServiceImpl(UserAirportRepository userAirportRepository) {
        this.userAirportRepository = userAirportRepository;
    }


    @Override
    @Transactional
    public UserAirport getUserAirport(Long id) {
        UserAirport userAirport = userAirportRepository.getOne(id);
        return userAirport;
    }

    @Override
    @Transactional
    public UserAirport updateUserAirport(UserAirport userAirport) {
        UserAirport userAirport1 = userAirportRepository.save(userAirport);
        return userAirport;
    }

    @Override
    @Transactional
    public Long getIdAirportForIdUserairport(long idUserAirport) {
        Long id = userAirportRepository.getIdAirport(idUserAirport);
        return id;
    }

    @Override
    @Transactional
    public UserAirport saveFirstTime(UserAirport userAirport) {
        UserAirport userAirportResponse=userAirportRepository.save(userAirport);
        return userAirportResponse;
    }
}
