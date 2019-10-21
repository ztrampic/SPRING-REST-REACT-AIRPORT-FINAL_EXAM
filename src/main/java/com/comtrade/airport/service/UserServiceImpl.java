package com.comtrade.airport.service;

import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.enums.RoleName;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

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

    @Override
    @Transactional
    public List<User> getAllUsersByRole(String role) {
        List<User> userList;
        switch (role) {
            case "ROLE_ADMIN":
                userList = userRepository.getAllByRole(String.valueOf(RoleName.ROLE_ADMIN));
                break;
            case "ROLE_USER":
                userList = userRepository.getAllByRole(String.valueOf(RoleName.ROLE_USER));
                break;
            case "ROLE_ADMIN_AIRCOMPANY":
                userList = userRepository.getAllByRole(String.valueOf(RoleName.ROLE_ADMIN_AIRCOMPANY));
                break;
            default:
             return null;
        }
        return userList;
    }

    @Override
    @Transactional
    public void removeAll(AirCompany airCompany) {
        Set<User> userSet = airCompany.getSetUsers();
        for(User user : userSet){
            user.getAirCompanySet().remove(airCompany);
            userRepository.delete(user);
        }
        airCompany.getSetUsers().removeAll(userSet);

    }

    @Override
    @Transactional
    public User save(User user) {
        User userWithId = userRepository.save(user);
        return userWithId;
    }

    @Override
    @Transactional
    public boolean existsByEmail(String email) {
        boolean response = userRepository.existsByEmail(email);
        if(response == true){
            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public boolean existsByUsername(String username) {
        boolean response = userRepository.existsByUsername(username);
        if(response == true){
            return true;
        }
        return false;
    }
}
