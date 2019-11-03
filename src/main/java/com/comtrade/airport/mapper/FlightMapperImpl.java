package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.entity.*;
import com.comtrade.airport.tools.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class FlightMapperImpl implements FlightMapper{

    private final AirplaneMapper airplaneMapper;
    private final Helpers helpers;
    private final AirCompanyMapper airCompanyMapper;
    private final AirportMapper airportMapper;
    private final FlightScheduleMapper flightScheduleMapper;
    @Autowired
    public FlightMapperImpl(AirplaneMapper airplaneMapper, Helpers helpers, AirCompanyMapper airCompanyMapper, AirportMapper airportMapper, FlightScheduleMapper flightScheduleMapper) {
        this.airplaneMapper = airplaneMapper;
        this.helpers = helpers;
        this.airCompanyMapper = airCompanyMapper;
        this.airportMapper = airportMapper;
        this.flightScheduleMapper = flightScheduleMapper;
    }

    @Override
    public Flight convertDTOtoEntity(FlightDTO flightDTO) {

        return null;
    }

    @Override
    public Flight createFlight(AirCompany airCompany, Airplane airplane, Airport departureAirport, Airport arrivalAirport, FlightDTO flightDTO) {
        Flight flight = new Flight();
        Double distance = helpers.calculateDistance(departureAirport,arrivalAirport);
        flight.setDistance(distance);
        flight.setDepartureAirport(departureAirport);
        flight.setArrivalAirport(arrivalAirport);
        flight.setFlightNumber(flightDTO.getFlightNumber());
        flight.setAvailableSeats(Integer.valueOf(String.valueOf(airplane.getSeatingCapacity())));
        flight.setAirplane(airplane);
        flight.setAirCompany(airCompany);
        return flight;
    }

    @Override
    public FlightDTO convertToDTO(Flight flight) {
        FlightDTO flightDTO = new FlightDTO();
        flightDTO.setId(flight.getIdFlight());
        flightDTO.setAirplaneDTO(airplaneMapper.convertEntityToDTO(flight.getAirplane()));
        flightDTO.setAirCompanyDTO(airCompanyMapper.convertToDTO(flight.getAirCompany()));
        flightDTO.setFlightNumber(flight.getFlightNumber());
        flightDTO.setDepartureAirportDTO(airportMapper.convertAirportToAirportDTO(flight.getDepartureAirport()));
        flightDTO.setArrivalAirportDTO(airportMapper.convertAirportToAirportDTO(flight.getArrivalAirport()));
        flightDTO.setAvailableSeats(flightDTO.getAirplaneDTO().getSeatingCapacity());
        flightDTO.setDistance(flight.getDistance());
        flightDTO.setFlightScheduleDTO(flightScheduleMapper.convertOnlyTimeAndDate(flight.getFlightSchedule()));
        return flightDTO;
    }

    @Override
    public Set<FlightDTO> convertListToDTOSet(List<Flight> flights) {
        Set<FlightDTO> flightDTOS = new HashSet<>();
        for(Flight flight : flights){
            FlightDTO flightDTO = convertToDTO(flight);
            flightDTOS.add(flightDTO);
        }
        return flightDTOS;
    }
}
