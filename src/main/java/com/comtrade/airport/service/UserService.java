package com.comtrade.airport.service;

import com.comtrade.airport.dto.UserDTO;

public interface UserService {
 UserDTO getUserByUsername(String username);
}
