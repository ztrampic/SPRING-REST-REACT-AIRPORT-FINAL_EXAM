package com.comtrade.airport.facade;

import com.comtrade.airport.dto.FlightRequestDTO;
import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.enums.FlightRequestStatus;
import com.comtrade.airport.mapper.FlightRequestMapper;
import com.comtrade.airport.service.FlightRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightRequestFacade {
    private final FlightRequestService flightRequestService;
    private final FlightRequestMapper flightRequestMapper;
    @Autowired
    public FlightRequestFacade(FlightRequestService flightRequestService, FlightRequestMapper flightRequestMapper) {
        this.flightRequestService = flightRequestService;
        this.flightRequestMapper = flightRequestMapper;
    }

    public void insertNewFilghtRequest(FlightRequestDTO flightRequestDTO) {
        flightRequestDTO.setStatus(String.valueOf(FlightRequestStatus.PENDING));
        FlightRequest flightRequest = flightRequestMapper.convertDTOtoEntity(flightRequestDTO);
        try{
            flightRequestService.insertNewFR(flightRequest);
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public List<FlightRequestDTO> getAllFR() {
        List<FlightRequest> flightRequests = flightRequestService.getAll();
        List<FlightRequestDTO> listDtos = flightRequestMapper.convertToListDTOs(flightRequests);
        return listDtos;
    }

    public List<FlightRequestDTO> getAllPendingRequests() {
        List<FlightRequest> flightRequests = flightRequestService.getAllPennding();
        List<FlightRequestDTO> flightRequestDTOS = flightRequestMapper.convertToListDTOs(flightRequests);
        return flightRequestDTOS;
    }
}
