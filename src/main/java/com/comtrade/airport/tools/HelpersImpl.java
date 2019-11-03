package com.comtrade.airport.tools;

import com.comtrade.airport.entity.Airport;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class HelpersImpl implements Helpers{

    @Override
    @Transactional
    public Double calculateDistance(Airport departureAirport, Airport arrivalAirport) {
        double lat1 = departureAirport.getLatitude();
        double lat2 = arrivalAirport.getLatitude();
        double lon1 = departureAirport.getLongitute();
        double lon2 = arrivalAirport.getLongitute();
        String unit = "K";
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0D;
        }else{
            double theta = lon1 - lon2;
            double dist = Math.sin(Math.toRadians(lat1)) * Math.sin(Math.toRadians(lat2)) + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) * Math.cos(Math.toRadians(theta));
            dist = Math.acos(dist);
            dist = Math.toDegrees(dist);
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344;
            } else if (unit == "N") {
                dist = dist * 0.8684;
            }
            dist = Math.round(dist * 100.0) / 100.0;
            return (dist);
        }
    }
}
