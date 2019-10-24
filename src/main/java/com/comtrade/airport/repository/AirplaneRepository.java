package com.comtrade.airport.repository;

import com.comtrade.airport.entity.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirplaneRepository extends JpaRepository<Airplane,Long> {

    @Query(value = "SELECT * FROM `airplane` WHERE `id_air_company` = ?",nativeQuery = true)
    List<Airplane> getAllForIdAirportCompany(Long id);
    @Query(value = "SELECT * FROM `airplane` WHERE `id_airplane` = ?",nativeQuery = true)
    Airplane getAirplaneById(Long id);
}
