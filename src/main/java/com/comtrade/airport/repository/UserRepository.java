package com.comtrade.airport.repository;

import com.comtrade.airport.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
//    @Query(value = "SELECT CASE WHEN COUNT(u) > 0 THEN 'true' ELSE 'false' END FROM User u WHERE u.username = ?",nativeQuery = true)
    boolean existsByUsername(String username);
//    @Query(value = "SELECT CASE WHEN COUNT(e) > 0 THEN 'true' ELSE 'false' END FROM User e WHERE u.email = ?",nativeQuery = true)
    boolean existsByEmail(String email);
    @Query(value = "SELECT * FROM `user` WHERE `username` LIKE ?",nativeQuery = true)
    User findByUsername(String username);
}
