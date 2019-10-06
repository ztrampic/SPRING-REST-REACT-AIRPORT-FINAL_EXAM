package com.comtrade.airport.repository;

import com.comtrade.airport.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
//    @Query(value = "SELECT CASE WHEN COUNT(u) > 0 THEN 'true' ELSE 'false' END FROM User u WHERE u.username = ?",nativeQuery = true)
    boolean existsByUsername(String username);
//    @Query(value = "SELECT CASE WHEN COUNT(e) > 0 THEN 'true' ELSE 'false' END FROM User e WHERE u.email = ?",nativeQuery = true)
    boolean existsByEmail(String email);
    @Query(value = "SELECT * FROM `user` WHERE `username` LIKE ?",nativeQuery = true)
    User findByUsername(String username);
    @Query(value = "SELECT u.* FROM user u INNER JOIN user_roles ru ON ru.user_id= u.user_id INNER JOIN role r ON r.id = ru.role_id WHERE r.role_name =:role_name",nativeQuery = true)
    List<User> getAllByRole(@Param("role_name") String role);
}
