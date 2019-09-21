package com.comtrade.airport.security.services;

import com.comtrade.airport.entity.Role;
import com.comtrade.airport.enums.RoleName;
import com.comtrade.airport.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImpl implements RoleService{

    private final RoleRepository roleRepository;
    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    @Transactional
    public Role findByName(RoleName roleAirportAdmin) {
        String rola = String.valueOf(roleAirportAdmin);
        Role role = roleRepository.findByName(rola);
        return role;
    }
}
