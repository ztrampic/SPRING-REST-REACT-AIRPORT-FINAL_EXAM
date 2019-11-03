package com.comtrade.airport.service;

import com.comtrade.airport.entity.FlightSchedule;
import com.comtrade.airport.repository.FlightScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FlightScheduleServiceImpl implements FlightScheduleService{
    private final FlightScheduleRepository flightScheduleRepository;
    @Autowired
    public FlightScheduleServiceImpl(FlightScheduleRepository flightScheduleRepository) {
        this.flightScheduleRepository = flightScheduleRepository;
    }

    @Override
    @Transactional
    public void insertNew(FlightSchedule flightSchedule) {
        flightScheduleRepository.save(flightSchedule);
    }

}
