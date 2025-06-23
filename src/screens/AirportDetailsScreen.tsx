import React from 'react';
import { useParams } from 'react-router-dom';
import { AirportDetails } from '../components/AirportDetails';
import { useAirports } from '../hooks/airports';
import AirplaneLoader from '../components/AirplaneLoader';


const AirportDetailsScreen: React.FC = () => {
    const { airportCode } = useParams<{ airportCode: string }>();
    const { data, fetching, error } = useAirports();

    if (fetching) {
        return <AirplaneLoader />;
    }
    if (error) {
        return <div>Error loading airport details.</div>;
    }

    const airport = data?.find(a => a.airportCode === airportCode);
    return (
        <div>
            {airport 
                ? <AirportDetails airport={airport} /> 
                : <div>No airport found.</div>}
        </div>
    );
};

export default AirportDetailsScreen;