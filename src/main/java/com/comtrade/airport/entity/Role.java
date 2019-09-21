package com.comtrade.airport.entity;

import com.comtrade.airport.enums.RoleName;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private RoleName RoleName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public com.comtrade.airport.enums.RoleName getRoleName() {
        return RoleName;
    }

    public void setRoleName(com.comtrade.airport.enums.RoleName roleName) {
        RoleName = roleName;
    }
}
