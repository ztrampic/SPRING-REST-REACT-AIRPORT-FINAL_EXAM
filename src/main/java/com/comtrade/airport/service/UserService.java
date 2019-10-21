package com.comtrade.airport.service;

import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.User;

import java.util.List;

public interface UserService {
 UserDTO getUserByUsername(String username);
 List<User> getAllUsersByRole(String role);
 void removeAll(AirCompany airCompany);
 User save(User user);
 boolean existsByEmail(String email);
 boolean existsByUsername(String username);
}
