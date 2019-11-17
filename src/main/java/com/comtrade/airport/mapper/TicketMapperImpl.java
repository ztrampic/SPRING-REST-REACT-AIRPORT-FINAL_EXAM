package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.TicketValueDTO;
import com.comtrade.airport.entity.TicketValue;
import com.comtrade.airport.enums.TicketType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TicketMapperImpl implements TicketValueMapper{

    private final FlightMapper flightMapper;
    @Autowired
    public TicketMapperImpl(FlightMapper flightMapper) {
        this.flightMapper = flightMapper;
    }

    @Override
    public TicketValue convertToEntity(TicketValueDTO ticketValueDTO) {
        try {
            TicketValue ticketValue = new TicketValue();
            ticketValue.setPrice(ticketValueDTO.getPrice());
            switch (ticketValueDTO.getValue()){
                case "BUSSNIS_CLASS" :
                    ticketValue.setTicketType(TicketType.BUSSNIS_CLASS);
                    break;
                case "ECONOMY_CLASS" :
                    ticketValue.setTicketType(TicketType.ECONOMY_CLASS);
                    break;
                case "FIRST_CLASS" :
                    ticketValue.setTicketType(TicketType.FIRST_CLASS);
                    break;
            }
            return ticketValue;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public TicketValueDTO convertToDto(TicketValue ticketValue) {
        TicketValueDTO ticketValueDTO = new TicketValueDTO();
        ticketValueDTO.setId(ticketValue.getId());
        ticketValueDTO.setPrice(ticketValue.getPrice());
        ticketValueDTO.setValue(String.valueOf(ticketValue.getTicketType()));
        ticketValueDTO.setFlightDTO(flightMapper.convertToDTO(ticketValue.getFlight()));
        return ticketValueDTO;
    }
}
