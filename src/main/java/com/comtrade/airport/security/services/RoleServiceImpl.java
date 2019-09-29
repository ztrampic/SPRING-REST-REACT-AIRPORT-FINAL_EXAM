package com.comtrade.airport.security.services;

import com.comtrade.airport.entity.Role;
import com.comtrade.airport.enums.RoleName;
import com.comtrade.airport.mapper.RoleMapper;
import com.comtrade.airport.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service
public class RoleServiceImpl implements RoleService{

    private final RoleRepository roleRepository;
    private final RoleMapper roleMapper;
    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository, RoleMapper roleMapper) {
        this.roleRepository = roleRepository;
        this.roleMapper = roleMapper;
    }

    @Override
    @Transactional
    public Role findByName(RoleName roleAirportAdmin) {
        String rola = String.valueOf(roleAirportAdmin);
        Role role = roleRepository.findByName(rola);
        return role;
    }

    @Override
    @Transactional
    public Set<Role> getAllRoles() {
        List<Role>roleList = roleRepository.getAll();
        Set<Role>roleSet = roleMapper.convertListToSet(roleList);
        return roleSet;
    }
}
