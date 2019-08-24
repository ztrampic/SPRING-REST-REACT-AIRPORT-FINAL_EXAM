package com.comtrade.airport.repository;

import com.comtrade.airport.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends JpaRepository<Airport,Integer> {

    @Query(value = "SELECT * FROM airport WHERE Lower(airport.name) LIKE ('%?%') and Lower(airport.city) LIKE ('%?%') ", nativeQuery = true)
    List<Airport> findSearchAirports(String name, String city);
}
