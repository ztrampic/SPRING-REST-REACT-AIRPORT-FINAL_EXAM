package com.comtrade.airport.repository;

import com.comtrade.airport.entity.FlightRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRequsetRepository extends JpaRepository<FlightRequest,Long> {
}
