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
    @Query(value = "SELECT a.* FROM air_company a INNER JOIN aircompany_users au ON au.id_air_company= a.id_air_company WHERE au.user_id = :user_id",nativeQuery = true)
    AirCompany getAirCompanyForAdminId(@Param("user_id") Long id);
}
