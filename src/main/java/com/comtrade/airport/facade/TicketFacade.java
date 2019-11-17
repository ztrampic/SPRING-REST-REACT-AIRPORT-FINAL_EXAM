package com.comtrade.airport.facade;

import com.comtrade.airport.dto.TicketValueDTO;
import com.comtrade.airport.entity.Flight;
import com.comtrade.airport.entity.TicketValue;
import com.comtrade.airport.mapper.FlightMapper;
import com.comtrade.airport.mapper.TicketValueMapper;
import com.comtrade.airport.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TicketFacade {
    private final TicketValueMapper ticketValueMapper;
    private final FlightMapper flightMapper;
    private final FlightService flightService;
    @Autowired
    public TicketFacade(TicketValueMapper ticketValueMapper, FlightMapper flightMapper, FlightService flightService) {
        this.ticketValueMapper = ticketValueMapper;
        this.flightMapper = flightMapper;
        this.flightService = flightService;
    }

    public void addNewTicketValue(TicketValueDTO ticketValueDTO) {
        Flight flight = flightService.getFlightById(ticketValueDTO.getIdFlight());
        TicketValue ticketValue = ticketValueMapper.convertToEntity(ticketValueDTO);
        flight.addTicketValues(ticketValue);
        Flight updatedFlight = flightService.updateFlight(flight);
    }

    public Set<TicketValueDTO> getAllTicketValuesForFlight(Long id) {
        Flight flight = flightService.getFlightById(id);
        Set<TicketValue> ticketValues = flight.getSetTicketValues();
        Set<TicketValueDTO> ticketValueDTOS = ticketValues.stream().map(ticketValue ->{
            try {
                return ticketValueMapper.convertToDto(ticketValue);
            }catch (Exception e){
                return null;
            }
        }).collect(Collectors.toSet());
        return ticketValueDTOS;
    }
}
