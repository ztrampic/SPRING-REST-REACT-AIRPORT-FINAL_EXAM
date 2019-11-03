package com.comtrade.airport.service;

import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.enums.FlightRequestStatus;
import com.comtrade.airport.repository.FlightRequsetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FlightRequsetServiceImpl implements FlightRequestService{

    private final FlightRequsetRepository flightRequsetRepository;
    @Autowired
    public FlightRequsetServiceImpl(FlightRequsetRepository flightRequsetRepository) {
        this.flightRequsetRepository = flightRequsetRepository;
    }

    @Override
    @Transactional
    public List<FlightRequest> getAll() {
        List<FlightRequest> list =  flightRequsetRepository.findAll();
        return list;
    }

    @Override
    @Transactional
    public void insertNewFR(FlightRequest flightRequest){
        flightRequsetRepository.save(flightRequest);
    }

    @Override
    @Transactional
    public List<FlightRequest> getAllPennding() {
        String status = String.valueOf(FlightRequestStatus.PENDING);
        FlightRequest flightRequest = new FlightRequest();
        List<FlightRequest> list = flightRequsetRepository.findAllByFlightRequestStatus(status);
        return list;
    }
    
    @Override
    @Transactional
    public List<FlightRequest> getAllAccepted() {
        String status = String.valueOf(FlightRequestStatus.APROVED);
        List<FlightRequest> list = flightRequsetRepository.findAllByFlightRequestStatus(status);
        return list;
    }

    @Override
    @Transactional
    public List<FlightRequest> getAllDeclined() {
        String status = String.valueOf(FlightRequestStatus.DECLINED);
        List<FlightRequest> list = flightRequsetRepository.findAllByFlightRequestStatus(status);
        return list;
    }

    @Override
    @Transactional
    public List<FlightRequest> declineFlightRequest(Long id) {
        FlightRequest flightRequest = flightRequsetRepository.getFlightRequestById(id);
        flightRequest.setStatus(FlightRequestStatus.DECLINED);
        flightRequsetRepository.save(flightRequest);
        String status = String.valueOf(FlightRequestStatus.PENDING);
        List<FlightRequest> list = flightRequsetRepository.findAllByFlightRequestStatus(status);
        return list;
    }

    @Override
    @Transactional
    public List<FlightRequest> acceptFlightRequst(Long id) {
        FlightRequest flightRequest = flightRequsetRepository.getFlightRequestById(id);
        flightRequest.setStatus(FlightRequestStatus.APROVED);
        flightRequsetRepository.save(flightRequest);
        String status = String.valueOf(FlightRequestStatus.PENDING);
        List<FlightRequest> list = flightRequsetRepository.findAllByFlightRequestStatus(status);
        return list;
    }

    @Override
    @Transactional
    public void approveFlightRequest(Long id) {
        FlightRequest flightRequest = flightRequsetRepository.getFlightRequestById(id);
        flightRequest.setStatus(FlightRequestStatus.APROVED);
        flightRequsetRepository.save(flightRequest);

    }

    @Override
    @Transactional
    public void deleteFlightRequest(Long id) {
        flightRequsetRepository.deleteById(id);
    }
}
