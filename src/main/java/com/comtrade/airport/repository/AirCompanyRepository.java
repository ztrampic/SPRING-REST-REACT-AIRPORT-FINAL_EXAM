package com.comtrade.airport.repository;

import com.comtrade.airport.entity.AirCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirCompanyRepository extends JpaRepository<AirCompany,Long>{
    @Query(value = "SELECT * FROM `air_company` WHERE `name` LIKE %:name%",nativeQuery = true)
    List<AirCompany> findByName(@Param("name") String name);
    @Query(value = "SELECT * FROM `air_company` WHERE `id_air_company` = ?",nativeQuery = true)
    AirCompany findAirCompanyById(Long id);
}
