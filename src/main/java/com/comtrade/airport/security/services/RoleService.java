package com.comtrade.airport.security.services;

import com.comtrade.airport.entity.Role;
import com.comtrade.airport.enums.RoleName;

public interface RoleService {
    Role findByName(RoleName roleAirportAdmin);
}
