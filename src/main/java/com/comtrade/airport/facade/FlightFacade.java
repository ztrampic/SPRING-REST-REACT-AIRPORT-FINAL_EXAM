package com.comtrade.airport.facade;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.dto.SearchFlightsDto;
import com.comtrade.airport.entity.*;
import com.comtrade.airport.mapper.FlightMapper;
import com.comtrade.airport.mapper.FlightScheduleMapper;
import com.comtrade.airport.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
        Airplane airplane = airplaneService.getAirplaneById(Long.parseLong(flightDTO.getIdAirplane()));
        Airport departureAirport = airportService.findById(Long.parseLong(flightDTO.getHomeAirportId()));
        Airport arrivalAirport = airportService.findById(Long.parseLong(flightDTO.getIdDestination()));
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
        return flightMapper.convertListToDTOSet(flights);
    }

    public FlightDTO getFlightById(Long id){
        Flight flight = flightService.getFlightById(id);
        return flightMapper.convertToDTO(flight);
    }

    public Set<FlightDTO> getFiveDepartureFlights(Long id, FlightDTO flightDTO) {
        Airport departureAirport = airportService.findById(id);
        Set<Flight> flightSet = departureAirport.getDepartureFlights();
        Set<Flight> result = flightSet.stream().filter(flight ->
                String.valueOf(flight.getFlightSchedule().getDepartureDate()).equals(flightDTO.getDepartureDate()))
                .collect(Collectors.toSet());
        Set<FlightDTO> flightDTOS = result.stream().map(flight ->{
            try {
                return flightMapper.convertToDTO(flight);
            }catch (Exception e){
                return null;
            }
        }).collect(Collectors.toSet());
        return flightDTOS;
    }

    public Set<FlightDTO> getSearchFlights(SearchFlightsDto searchFlightsDto) {
        Set<Flight> getSearchFlights = flightService.getSearchedFlights(searchFlightsDto);
        Set<FlightDTO> flightDTOS = getSearchFlights.stream().map(flight ->{
            try {
                return flightMapper.convertToDTO(flight);
            }catch (Exception e){
                return null;
            }
        }).collect(Collectors.toSet());
        return flightDTOS;
    }
}
