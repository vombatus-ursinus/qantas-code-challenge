import { Route, Routes } from 'react-router';
import AirportListScreen from './screens/AirportListScreen';
import AirportDetailsScreen from './screens/AirportDetailsScreen';

const setRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<AirportListScreen />} />
                <Route path="/:airportCode" element={<AirportDetailsScreen />} />
            </Routes>
    );
};

export default setRoutes;