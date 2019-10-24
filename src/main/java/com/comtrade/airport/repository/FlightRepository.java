package com.comtrade.airport.repository;

import com.comtrade.airport.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Long> {
    @Query(value = "select COUNT(id_flight) as number FROM flight WHERE `date` = ? AND `departure_airport_id` = ?",nativeQuery = true)
    Integer getNumberOfFlightsThatDay(Date date, Long id);
}
