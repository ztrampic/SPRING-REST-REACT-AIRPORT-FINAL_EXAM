package com.comtrade.airport.controller;

import com.comtrade.airport.entity.Role;
import com.comtrade.airport.security.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("api/role")
@CrossOrigin
public class RoleController {
    private final RoleService roleService;
    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }
    @GetMapping("/getAll")
    public ResponseEntity<?>getAllRoles(){
        Set<Role>setOfRoles = roleService.getAllRoles();
        return new ResponseEntity<Set<Role>>(setOfRoles, HttpStatus.OK);
    }
}
