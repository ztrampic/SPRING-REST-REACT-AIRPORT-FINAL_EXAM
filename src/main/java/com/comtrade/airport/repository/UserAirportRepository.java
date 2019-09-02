package com.comtrade.airport.repository;

import com.comtrade.airport.entity.UserAirport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAirportRepository extends JpaRepository<UserAirport,Long> {
    @Query(value = "SELECT airport_id FROM user_airport WHERE id_user_airport = ?",nativeQuery = true)
    Long getIdAirport(long idUserAirport);
}
