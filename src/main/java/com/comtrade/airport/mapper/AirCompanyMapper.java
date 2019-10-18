package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.entity.AirCompany;

import java.util.List;
import java.util.Set;

public interface AirCompanyMapper {
    AirCompany convertToEntity(AirCompanyDTO airCompanyDTO);
    AirCompanyDTO convertToDTO(AirCompany airCompany);
    Set<AirCompanyDTO> convertToSetDTOs(List<AirCompany> airCompanyList);
    Set<AirCompanyDTO> convertSetToSetDTOs(Set<AirCompany> airCompanies);
}
