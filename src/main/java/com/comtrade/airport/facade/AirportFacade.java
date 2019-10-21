package com.comtrade.airport.facade;

import com.comtrade.airport.dto.AirCompanyDTO;
import com.comtrade.airport.dto.AirportAdminSearchDTO;
import com.comtrade.airport.dto.AirportDTO;
import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.mapper.AirCompanyMapper;
import com.comtrade.airport.mapper.AirportMapper;
import com.comtrade.airport.service.AirCompanyService;
import com.comtrade.airport.service.AirplaneService;
import com.comtrade.airport.service.AirportService;
import com.comtrade.airport.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class AirportFacade {

    private final AirportService airportService;
    private final AirportMapper airportMapper;
    private final AirCompanyMapper airCompanyMapper;
    private final AirCompanyService airCompanyService;
    private final UserService userService;
    private final AirplaneService airplaneService;
    @Autowired
    public AirportFacade(AirportService airportService, AirportMapper airportMapper, AirCompanyMapper airCompanyMapper, AirCompanyService airCompanyService, UserService userService, AirplaneService airplaneService) {
        this.airportService = airportService;
        this.airportMapper = airportMapper;
        this.airCompanyMapper = airCompanyMapper;
        this.airCompanyService = airCompanyService;
        this.userService = userService;
        this.airplaneService = airplaneService;
    }

    public List<AirportDTO> newAirportsList(List<AirportDTO> listaAerodromaJSON) {
        List<Airport> listaSaIdAerodroma= new ArrayList<>();
        for(AirportDTO a: listaAerodromaJSON){
            Airport airport  = airportMapper.convertAirportDTOtoAirport(a);
            airport= airportService.newAirport(airport);
            listaSaIdAerodroma.add(airport);
        }
        List<AirportDTO>listaForFront = new ArrayList<>();
        for (Airport air : listaSaIdAerodroma){
            AirportDTO airportDTO = airportMapper.convertAirportToAirportDTO(air);
            listaForFront.add(airportDTO);
        }
        return listaForFront;
    }

    public List<AirportDTO> newAirport(AirportDTO airportDTO) {
        Airport airport = new Airport();
        List<AirportDTO>listDTO = new ArrayList<>();
        List<Airport>listAirport = new ArrayList<>();
        airport = airportMapper.convertAirportDTOtoAirport(airportDTO);
        airport= airportService.newAirport(airport);
        listAirport = airportService.getAllAirports();
        for(Airport a: listAirport){
            airportDTO = airportMapper.convertAirportToAirportDTO(a);
            listDTO.add(airportDTO);
        }
        return listDTO;
    }

    public List<AirportDTO> getAllAirports() {
        List<AirportDTO>listAirportsDTO = new ArrayList<>();
        List<Airport> listAirports = airportService.getAllAirports();
        for(Airport a: listAirports){
            AirportDTO airportDTO = airportMapper.convertAirportToAirportDTO(a);
            listAirportsDTO.add(airportDTO);
        }
        return  listAirportsDTO;
    }

                    //    PROVERITI OVO StA JE
    public List<AirportDTO> getSearchAirports(AirportDTO airportDTO) {
        List<Airport> searchList = airportService.getSearchAirports(airportDTO);
        List<AirportDTO> searchListDTO = new ArrayList<>();
        for(Airport a: searchList){
            AirportDTO airportDTO1 = airportMapper.convertAirportToAirportDTO(a);
            searchListDTO.add(airportDTO1);
        }
        return searchListDTO;
    }

    public List<AirportDTO> updateAirportAndGetAll(AirportDTO airportDTO) {
        List<AirportDTO> listDto = new ArrayList<>();
        Airport airport = airportMapper.convertAirportDTOtoAirport(airportDTO);
        List<Airport> updatedList = airportService.updateAirport(airport);
        for(Airport a: updatedList){
            AirportDTO airportDTO1 =airportMapper.convertAirportToAirportDTO(a);
            listDto.add(airportDTO1);
        }
        return listDto;
    }

    public List<AirportDTO> hardDeleteAirportAndGetAll(String id){
        String value = id.replaceAll("[^0-9]","");
        Long idDel = Long.parseLong(value);
        airportService.hardDeleteAirport(idDel);
        List<Airport> list = airportService.getAllAirports();
        List<AirportDTO>listDTO = new ArrayList<>();
        for(Airport a:list){
            AirportDTO airportDTO = airportMapper.convertAirportToAirportDTO(a);
            listDTO.add(airportDTO);
        }
        return listDTO;
    }

    public List<AirportAdminSearchDTO> searchAirportByCity(String searchString){
        String cityName = searchString.replace("=","");
        List<AirportAdminSearchDTO>searchListDto = new ArrayList<>();
        List<Airport>listAirports = airportService.getSearchAirportBycity(cityName);
        for(Airport a:listAirports){
            AirportAdminSearchDTO airportAdminSearchDTO = airportMapper.convertAirportToAirportAdminSearchDTO(a);
            searchListDto.add(airportAdminSearchDTO);
        }
        return searchListDto;
    }

    public Set<AirCompanyDTO> getAllUsersAirCompanysOfAirport(Long id) {
        Airport airport = airportService.findById(id);
        Set<AirCompany> airCompanies = airport.getAirCompanySet();
        Set<AirCompanyDTO> airCompanyDTOS = airCompanyMapper.convertSetToSetDTOs(airCompanies);
        return airCompanyDTOS;
    }

    public Set<AirCompanyDTO> deleteUserAirCompany(Long id, Long idAircompany) {
        Airport airport = airportService.findById(id);
        AirCompany airCompany = airCompanyService.findAirCompanyById(idAircompany);
        airplaneService.removeAll(airCompany);
        userService.removeAll(airCompany);
        airport.removeAirCompany(airCompany);
        Airport airport1 = airportService.newAirport(airport);
        Set<AirCompanyDTO>airCompanyDTOS = airCompanyMapper.convertSetToSetDTOs(airport1.getAirCompanySet());
        return airCompanyDTOS;
    }

}


