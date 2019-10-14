package com.comtrade.airport.service;

import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.enums.RoleName;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.repository.UserRepository;
import com.comtrade.airport.security.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService{

   private final UserRepository userRepository;
   private final UserMapper userMapper;
   private final RoleService roleService;
    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, RoleService roleService) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.roleService = roleService;
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
        List<User> userList = new ArrayList<>();
        switch (role) {
            case "ROLE_ADMIN":
                userList = userRepository.getAllByRole(String.valueOf(RoleName.ROLE_ADMIN));
                break;
            case "ROLE_USER":
                userList = userRepository.getAllByRole(String.valueOf(RoleName.ROLE_USER));
                break;
            default:
             return null;
        }
        return userList;
    }

    @Override
    @Transactional
    public void removeAll(AirCompany airCompany, Set<User> userSet) {
        for(User user:userSet){
            airCompany.getSetUsers().remove(user);
            user.getAirCompanySet().remove(airCompany);
            userRepository.delete(user);
        }
    }
}
