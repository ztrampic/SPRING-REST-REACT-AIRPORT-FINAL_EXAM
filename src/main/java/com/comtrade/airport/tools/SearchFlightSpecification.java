package com.comtrade.airport.tools;

import com.comtrade.airport.entity.AirCompany;
import com.comtrade.airport.entity.Airport;
import com.comtrade.airport.entity.Flight;
import org.springframework.data.jpa.domain.Specification;

public class SearchFlightSpecification {

    public static Specification<Flight>withDestinationCity(Airport destinationAirport){
        if(destinationAirport.getCity().equals("")) return null;
        if(destinationAirport == null){
            return null;
        }else {
            return (root, query, cb) -> cb.equal(root.join("arrivalAirport").get("city"), destinationAirport.getCity());
        }
    }
    public static Specification<Flight>withFlightNumber(String flightNumber){
        if(flightNumber.equals(""))return null;
        if(flightNumber == null){
            return null;
        }else {
            return (root, query, cb) -> cb.equal(root.get("flightNumber"), flightNumber);
        }
    }
    public static Specification<Flight>withAirCompanyName(AirCompany airCompany){
        if(airCompany.getName().equals(""))return null;
        if(airCompany == null){
            return null;
        }else {
            return (root, query, cb) -> cb.equal(root.join("airCompany").get("name"), airCompany.getName());
        }
    }
}
