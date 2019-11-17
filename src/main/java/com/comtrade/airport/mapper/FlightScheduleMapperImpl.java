package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.dto.FlightScheduleDTO;
import com.comtrade.airport.entity.FlightSchedule;
import com.comtrade.airport.enums.FlightScheduleStatus;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Component
public class FlightScheduleMapperImpl implements FlightScheduleMapper{

    @Override
    public FlightSchedule createFlightSchedule(FlightDTO flightDTO) {
        FlightSchedule flightSchedule = new FlightSchedule();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate localDate = LocalDate.parse(flightDTO.getDepartureDate(), formatter);
        flightSchedule.setArrivalDate(localDate);
        flightSchedule.setDepartureDate(localDate);
        flightSchedule.setDepartureTime(LocalTime.parse(flightDTO.getDepartureTime()));
        flightSchedule.setArrivalTime(LocalTime.parse(flightDTO.getArrivalTime()));
        flightSchedule.setFlightScheduleStatus(FlightScheduleStatus.ACTIVE);
        return flightSchedule;
    }

    @Override
    public FlightScheduleDTO convertOnlyTimeAndDate(FlightSchedule flightSchedule) {
        FlightScheduleDTO flightScheduleDTO = new FlightScheduleDTO();
        flightScheduleDTO.setArrivalDate(String.valueOf(flightSchedule.getArrivalDate()));
        flightScheduleDTO.setArrivalTime(String.valueOf(flightSchedule.getArrivalTime()));
        flightScheduleDTO.setDepartureDate(String.valueOf(flightSchedule.getDepartureDate()));
        flightScheduleDTO.setDepartureTime(String.valueOf(flightSchedule.getDepartureTime()));
        flightScheduleDTO.setStatus(String.valueOf(flightSchedule.getFlightScheduleStatus()));
        return flightScheduleDTO;
    }
}
