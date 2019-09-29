package com.comtrade.airport.security.services;

import com.comtrade.airport.entity.Role;
import com.comtrade.airport.enums.RoleName;

import java.util.Set;

public interface RoleService {
    Role findByName(RoleName roleAirportAdmin);
    Set<Role> getAllRoles();
}
