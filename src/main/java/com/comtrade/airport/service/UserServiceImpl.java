package com.comtrade.airport.service;

import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService{

   private final UserRepository userRepository;
   private final UserMapper userMapper;
    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    @Transactional
    public UserDTO getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        UserDTO userDto = userMapper.convertEntityToUserDTO(user);
        return userDto;
    }
}
