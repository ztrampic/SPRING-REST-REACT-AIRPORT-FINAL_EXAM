package com.comtrade.airport.repository;

import com.comtrade.airport.entity.FlightRequest;
import com.comtrade.airport.enums.FlightRequestStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRequsetRepository extends JpaRepository<FlightRequest,Long>{

    @Query(value = "SELECT * FROM `flight_request` WHERE `id` = ?",nativeQuery = true)
    FlightRequest getFlightRequestById(Long id);
    @Query(value = "SELECT * FROM `flight_request` WHERE `status` = ?",nativeQuery = true)
    List<FlightRequest> findAllByFlightRequestStatus(String status);
}
