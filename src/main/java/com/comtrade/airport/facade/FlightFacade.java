package com.comtrade.airport.facade;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.entity.*;
import com.comtrade.airport.mapper.FlightMapper;
import com.comtrade.airport.mapper.FlightScheduleMapper;
import com.comtrade.airport.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.Set;

@Service
public class FlightFacade {

    private final FlightService flightService;
    private final FlightMapper flightMapper;
    private final AirplaneService airplaneService;
    private final AirportService airportService;
    private final AirCompanyService airCompanyService;
    private final FlightScheduleService flightScheduleService;
    private final FlightScheduleMapper flightScheduleMapper;
    @Autowired
    public FlightFacade(FlightService flightService, FlightMapper flightMapper, AirplaneService airplaneService, AirportService airportService, AirCompanyService airCompanyService, FlightScheduleService flightScheduleService, FlightScheduleMapper flightScheduleMapper) {
        this.flightService = flightService;
        this.flightMapper = flightMapper;
        this.airplaneService = airplaneService;
        this.airportService = airportService;
        this.airCompanyService = airCompanyService;
        this.flightScheduleService = flightScheduleService;
        this.flightScheduleMapper = flightScheduleMapper;
    }

    public void insertNewFlight(FlightDTO flightDTO) throws ParseException {
        AirCompany airCompany = airCompanyService.findByAirplaneId(Long.parseLong(flightDTO.getIdAirplane()));
        Airplane airplane = airplaneService.getAirplaneById(Long.valueOf(flightDTO.getIdAirplane()));
        Airport departureAirport = airportService.findById(Long.valueOf(flightDTO.getHomeAirportId()));
        Airport arrivalAirport = airportService.findById(Long.valueOf(flightDTO.getIdDestination()));
        Flight flight = flightMapper.createFlight(airCompany,airplane,departureAirport,arrivalAirport,flightDTO);
        FlightSchedule flightSchedule = flightScheduleMapper.createFlightSchedule(flightDTO);
        Flight flightWitId = flightService.insertNewFlight(flight);
        flightSchedule.setFlight(flightWitId);
        flightScheduleService.insertNew(flightSchedule);
//        airCompany.addFlight(flightWitId);
//        airplane.addToFlightSet(flightWitId);
//        departureAirport.addDepartureFlight(flightWitId);
//        arrivalAirport.addArrivalFlight(flightWitId);
    }

    public Set<FlightDTO> getAllDepartureFlightsForDate(Long id, String date) throws ParseException {
        List<Flight> flights = flightService.getAllDepartureFlightsForDate(id,date);
        Set<FlightDTO> flightDTOS = flightMapper.convertListToDTOSet(flights);
        return flightDTOS;
    }

    public FlightDTO getFlightById(Long id){
        Flight flight = flightService.getFlightById(id);
        FlightDTO flightDTO = flightMapper.convertToDTO(flight);
        return flightDTO;
    }

}
