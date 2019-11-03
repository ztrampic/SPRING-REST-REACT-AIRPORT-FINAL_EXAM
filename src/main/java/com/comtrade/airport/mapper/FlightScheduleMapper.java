package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.FlightDTO;
import com.comtrade.airport.dto.FlightScheduleDTO;
import com.comtrade.airport.entity.FlightSchedule;

public interface FlightScheduleMapper {
    FlightSchedule createFlightSchedule(FlightDTO flightDTO);
    FlightScheduleDTO convertOnlyTimeAndDate(FlightSchedule flightSchedule);
}
