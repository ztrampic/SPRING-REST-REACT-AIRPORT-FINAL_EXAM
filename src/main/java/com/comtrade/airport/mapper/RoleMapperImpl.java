package com.comtrade.airport.mapper;

import com.comtrade.airport.entity.Role;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class RoleMapperImpl implements RoleMapper{

    @Override
    public Set<Role> convertListToSet(List<Role> roleList) {
        Set<Role>roleSet = new HashSet<>();
        for(Role r : roleList){
            roleSet.add(r);
        }
        return roleSet;
    }
}
