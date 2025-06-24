import { Airport } from '../types/airport';
import { Button } from '../components/Button';
import { Foldable } from './Foldable';
import React from 'react';
import cn from 'classnames';
import { useCurrency } from '../hooks/currency';
import { useNavigate } from 'react-router-dom';

interface AirportDetailsProps {
    airport: Airport;
}

export const AirportDetails: React.FC<AirportDetailsProps> = ({ airport }) => {
    const currency = useCurrency(airport.country.countryCode);
    const navigate = useNavigate();

    return (
        <div className="airport-card">
            <div className={cn("airport-card", "airport-header")}>
                <h3 className="airport-card-title">{airport.airportName}</h3>
            </div>

            <div className="airport-card-content">
                <h2>{airport.city.cityName}, {airport.country.countryName}</h2>
                <p><strong>Airport Code:</strong> {airport.airportCode}</p>
                <div className="airport-chips-row">
                    {airport.eticketableAirport && <span>🎫 e-Ticketable</span>}
                    {airport.internationalAirport && <span>🌐 International</span>}
                    {airport.domesticAirport && <span>🏠 Domestic</span>}
                    {airport.regionalAirport && <span>🧭 Regional</span>}
                    <span>
                        {airport.onlineIndicator 
                        ? '📶 Online'
                        : '❌ Offline'}
                    </span>
                </div>
                <p><strong>Timezone:</strong> {airport.city.timeZoneName.replace('_', ' ')/*replacing underscore for better readability*/}</p>
                <p><strong>Currency:</strong> {currency.data}</p>

                <Foldable props={{
                    title: "Administartive Location",
                    moreInfo: [
                        `Region: ${airport.region.regionName} [code: ${airport.region.regionCode}]`,
                        `Country: ${airport.country.countryName} [code: ${airport.country.countryCode}]`,
                        ...(airport.state && Object.keys(airport.state).length > 0
                            ? [`State: ${airport.state.stateName} [code: ${airport.state.stateCode}]`]
                            : []),
                        `City: ${airport.city.cityName} [code: ${airport.city.cityCode}]`
                    ]
                }} />

                <Foldable props={{
                    title: "Geographical Location",
                    moreInfo: [
                        `Latitude: ${airport.location.latitude}° ${airport.location.latitudeDirection}`,
                        `Latitude Radius: ${airport.location.latitudeRadius}`,
                        `Longitude: ${airport.location.longitude}° ${airport.location.longitudeDirection}`,
                        `Longitude Radius: ${airport.location.longitudeRadius}`,
                        ...(airport.location.aboveSeaLevel > -9999 /*-9999 feet is a bit low for elevation but some data has this value*/
                            ? [`Elevation: ${airport.location.aboveSeaLevel} feet`]
                            : [])
                    ]
                }} />
            </div>
            <div style={{ marginBottom: 16,  width: '90vw' }}>
                <Button variant="primary" onClick={() => navigate('/')}>Back to List</Button>
            </div>
        </div>
        
    );
};