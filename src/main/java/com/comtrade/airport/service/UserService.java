package com.comtrade.airport.service;

import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.User;

import java.util.List;
import java.util.Set;

public interface UserService {
 UserDTO getUserByUsername(String username);
 List<User> getAllUsersByRole(String role);
    void removeAll(AirCompany airCompany, Set<User> userSet);
}
