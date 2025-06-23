import React from 'react';
import { useNavigate } from 'react-router';
import { useAirports } from '../hooks/airports';
import { AirportList } from '../components/AirportList';
import AirplaneLoader from '../components/AirplaneLoader';


const AirportListScreen: React.FC = () => {
    const { data: airports, fetching, error } = useAirports();
    const navigate = useNavigate();

    const handleAirportSelect = (airportCode: string) => {
        navigate(`/${airportCode}`);
    };

    if (fetching) {
        return <AirplaneLoader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <AirportList airports={airports || []} onSelect={handleAirportSelect} />
    );
};

export default AirportListScreen;