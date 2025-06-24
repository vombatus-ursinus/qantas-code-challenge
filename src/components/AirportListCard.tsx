import { Airport } from '../types/airport';
import React from 'react';

interface AirportListCardProps {
    airport: Airport;
    onClick: (airportCode: string) => void;
}

export const AirportListCard: React.FC<AirportListCardProps> = ({ airport, onClick }) => (
    <div className="airport-list-card" onClick={() => onClick(airport.airportCode)}>
        <div className="airport-list-card-content">
            <h3 style={{ margin: 0 }}>{airport.airportName}</h3>
            <div style={{ marginTop: 4 }}>
                {airport.country.countryName}
            </div>
        </div>
        {/*right chevron, falls back to currentColor in css*/}
        <span className="chevron" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 36 36" style={{ height: '80%' }} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <polyline points="14,8 22,18 14,28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
        </span>
    </div>
);