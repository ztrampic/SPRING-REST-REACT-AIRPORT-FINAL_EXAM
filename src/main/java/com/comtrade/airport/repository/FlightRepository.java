package com.comtrade.airport.repository;

import com.comtrade.airport.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Long> {
    @Query(value = "select COUNT(*) FROM flight INNER JOIN flight_schedule on flight.id_flight = flight_schedule.flight_id_flight WHERE flight_schedule.departure_date = ? AND flight.departure_airport_id = ?",nativeQuery = true)
    Integer getNumberOfFlightsThatDay(Date date, Long id);
    @Query(value = "select * FROM flight INNER JOIN flight_schedule on flight.id_flight = flight_schedule.flight_id_flight WHERE flight_schedule.departure_date = ? AND flight.departure_airport_id = ?",nativeQuery = true)
    List<Flight> getAllDepartureFlightsForDate(LocalDate date, Long id);
    @Query(value = "SELECT * from flight where id_flight = ?",nativeQuery = true)
    Flight getFlightById(Long id);
}
