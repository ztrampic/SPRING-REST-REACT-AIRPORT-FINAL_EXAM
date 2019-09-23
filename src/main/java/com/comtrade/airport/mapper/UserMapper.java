package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.User;

public interface UserMapper {
    User convertSingUpDTOtoUser(SingUpDTO singUpDTO);
    UserDTO convertEntityToUserDTO(User user);
}
