package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirplaneDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.dto.FlightRequestDTO;
import com.comtrade.airport.entity.Airplane;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.enums.FlightRequestStatus;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FlightRequestMapperImpl implements FlightRequestMapper {

    @Override
    public List<FlightRequestDTO> convertToListDTOs(List<FlightRequest> list) {
        List<FlightRequestDTO>listDTO = new ArrayList<>();
        for(FlightRequest f:list){
            FlightRequestDTO flightRequestDTO = new FlightRequestDTO();
            AirplaneDTO airplaneDTO = new AirplaneDTO();
            AirportDTO airportDTO = new AirportDTO();
            AirCompanyDTO airCompanyDTO = new AirCompanyDTO();
            String id = String.valueOf(f.getId());
            String date = f.getDatum();
            String status = String.valueOf(f.getStatus());
            String airCompanyName = f.getAirplane().getAirCompany().getName();
            airCompanyDTO.setName(airCompanyName);
            airplaneDTO.setAirCompanyDTO(airCompanyDTO);
            airplaneDTO.setIdAirplane(String.valueOf(f.getAirplane().getIdAirplane()));
            airplaneDTO.setMark(f.getAirplane().getMark());
            airportDTO.setId(String.valueOf(f.getDestinationAirort().getId()));
            airportDTO.setName(f.getDestinationAirort().getName());
            flightRequestDTO.setIdFR(id);
            flightRequestDTO.setAirplaneDTO(airplaneDTO);
            flightRequestDTO.setDestinationAirportDTO(airportDTO);
            flightRequestDTO.setDatum(date);
            flightRequestDTO.setStatus(status);
            listDTO.add(flightRequestDTO);
        }
        return listDTO;
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
