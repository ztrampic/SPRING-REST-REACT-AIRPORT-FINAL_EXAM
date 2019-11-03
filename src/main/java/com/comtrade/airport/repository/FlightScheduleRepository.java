package com.comtrade.airport.repository;

import com.comtrade.airport.entity.FlightSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightScheduleRepository extends JpaRepository<FlightSchedule,Long> {
    @Query(value = "SELECT * FROM `flight_schedule` where flight_id_flight = ?",nativeQuery = true)
    FlightSchedule findByFlightId(Long idFlight);
}
