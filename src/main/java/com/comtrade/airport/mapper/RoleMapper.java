package com.comtrade.airport.mapper;

import com.comtrade.airport.entity.Role;

import java.util.List;
import java.util.Set;

public interface RoleMapper {
    Set<Role> convertListToSet(List<Role> roleList);
}
