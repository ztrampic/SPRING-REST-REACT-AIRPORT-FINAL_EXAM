package com.comtrade.airport.service;

import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.repository.FlightRequsetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class FlightRequsetServiceImpl implements FlightRequestService{

    private final FlightRequsetRepository flightRequsetRepository;
    @Autowired
    public FlightRequsetServiceImpl(FlightRequsetRepository flightRequsetRepository) {
        this.flightRequsetRepository = flightRequsetRepository;
    }

    @Override
    @Transactional
    public List<FlightRequest> getAll() {
        List<FlightRequest> list =  flightRequsetRepository.findAll();
        return list;
    }

    @Override
    @Transactional
    public void insertNewFR(FlightRequest flightRequest) {
        flightRequsetRepository.save(flightRequest);
    }
}
