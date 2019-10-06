package com.comtrade.airport.mapper;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.entity.AirCompany;

public interface AirCompanyMapper {
    AirCompany convertToEntity(AirCompanyDTO airCompanyDTO);

    AirCompanyDTO convertToDTO(AirCompany airCompany);
}
