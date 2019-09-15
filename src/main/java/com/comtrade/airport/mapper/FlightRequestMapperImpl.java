package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.FlightRequestDTO;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.enums.FlightRequestStatus;
import com.comtrade.airport.service.AirplaneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
@Component
public class FlightRequestMapperImpl implements FlightRequestMapper {

    private final AirplaneService airplaneService;
    private final AirplaneMapper airplaneMapper;
    private final AirportMapper airportMapper;
    @Autowired
    public FlightRequestMapperImpl(AirplaneService airplaneService, AirplaneMapper airplaneMapper, AirportMapper airportMapper) {
        this.airplaneService = airplaneService;
        this.airplaneMapper = airplaneMapper;
        this.airportMapper = airportMapper;
    }


    @Override
    public List<FlightRequestDTO> convertToListDTOs(List<FlightRequest> list) {
        List<FlightRequestDTO>listDTO = new ArrayList<>();
        for(FlightRequest f:list){
            FlightRequestDTO flightRequestDTO = new FlightRequestDTO();

        }

        return null;
    }

    @Override
    public FlightRequest convertDTOtoEntity(FlightRequestDTO flightRequestDTO) {
        FlightRequest flightRequest = new FlightRequest();
        Airplane airplane = new Airplane();
        Airport airport = new Airport();
        airplane.setIdAirplane(Long.parseLong(flightRequestDTO.getAirplaneDTO().getIdAirplane()));
        airport.setId(Long.parseLong(flightRequestDTO.getDestinationAirportDTO().getId()));
        flightRequest.setAirplane(airplane);
        flightRequest.setDestinationAirort(airport);
        flightRequest.setDatum(flightRequestDTO.getDatum());
        flightRequest.setStatus(FlightRequestStatus.PENDING);
        flightRequest.setDescription(flightRequestDTO.getDescription());
        return flightRequest;
    }
}
