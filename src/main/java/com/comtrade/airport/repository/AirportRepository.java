package com.comtrade.airport.repository;

import com.comtrade.airport.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends JpaRepository<Airport,Long> {

    @Query(value = "SELECT * FROM airport WHERE Lower(airport.name) LIKE ('%?%') and Lower(airport.city) LIKE ('%?%') ", nativeQuery = true)
    List<Airport> findSearchAirports(String name, String city);
    @Query(value = "SELECT * FROM `airport` WHERE `city` LIKE %:cityName%",nativeQuery = true)
    List<Airport> findAirportByCityName(@Param("cityName") String cityName);
    @Query(value = "SELECT * FROM `airport` WHERE `id` = ?",nativeQuery = true)
    Airport getAirportById(Long id);
    @Query(value = "SELECT number_of_max_departures FROM `airport` WHERE id = ?",nativeQuery = true)
    Integer getMaxDepartures(Long id);
}
