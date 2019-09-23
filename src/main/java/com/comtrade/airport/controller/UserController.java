package com.comtrade.airport.controller;

import com.comtrade.airport.dto.LoginDTO;
import com.comtrade.airport.dto.UserDTO;
import com.comtrade.airport.entity.User;
import com.comtrade.airport.mapper.UserMapper;
import com.comtrade.airport.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
@CrossOrigin
public class UserController {

    private final UserService userService;
    private  final UserMapper userMapper;
    @Autowired
    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }
    @PostMapping("/getUser")
    public ResponseEntity<?> getUser(@RequestBody LoginDTO loginDTO) {
        UserDTO userDTO = userService.getUserByUsername(loginDTO.getUsername());
        return new ResponseEntity<UserDTO>(userDTO, HttpStatus.OK);
    }
}
