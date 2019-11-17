package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.TicketValueDTO;
import com.comtrade.airport.entity.TicketValue;

public interface TicketValueMapper {
    TicketValue convertToEntity(TicketValueDTO ticketValueDTO);
    TicketValueDTO convertToDto(TicketValue ticketValue);
}
