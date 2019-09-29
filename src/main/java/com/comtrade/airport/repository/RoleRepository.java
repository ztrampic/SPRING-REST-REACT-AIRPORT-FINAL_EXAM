package com.comtrade.airport.repository;

import com.comtrade.airport.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
    @Query(value = "SELECT * FROM `role` WHERE `role_name` LIKE ?",nativeQuery = true)
    Role findByName(String rola);
    @Query(value = "select * from role",nativeQuery = true)
    List<Role> getAll();
}
