package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.SingUpDTO;
import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.Role;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.enums.RoleName;
import com.comtrade.airport.security.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Component
public class UserMapperImpl implements UserMapper{
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;
    @Autowired
    public UserMapperImpl(PasswordEncoder passwordEncoder, RoleService roleService) {
        this.passwordEncoder = passwordEncoder;
        this.roleService = roleService;
    }

    @Override
    @Transactional
    public User convertSingUpDTOtoUser(SingUpDTO singUpDTO) {
        User user = new User(singUpDTO.getName(),singUpDTO.getLastname(), singUpDTO.getEmail(),
                passwordEncoder.encode(singUpDTO.getPassword()), singUpDTO.getUsername(),singUpDTO.getPhonenumber());
        Set<String> strRoles = singUpDTO.getRole();
        Set<Role> roles = new HashSet<>();
        if(strRoles == null){
            Role userRole = roleService.findByName(RoleName.ROLE_USER);
            roles.add(userRole);
        }else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleService.findByName(RoleName.ROLE_ADMIN);
                        roles.add(adminRole);

                        break;
                    case "pm":
                        Role pmRole = roleService.findByName(RoleName.ROLE_ADMIN_AIRCOMPANY);
                        roles.add(pmRole);

                        break;
                    default:
                        Role userRole = roleService.findByName(RoleName.ROLE_USER);
                        roles.add(userRole);
                }
            });
            user.setRoleSet(roles);
        }
        user.setRoleSet(roles);
        return user;
    }

    @Override
    @Transactional
    public UserDTO convertEntityToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setUserId(String.valueOf(user.getUserId()));
        userDTO.setRoleSet(user.getRoleSet());
        userDTO.setUsername(user.getUsername());
        return userDTO;
    }
}
