
import { render, screen } from '@testing-library/react';
import '@jest/globals';
import '@testing-library/jest-dom';
import { AirportDetails } from '../../components/AirportDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

jest.mock('../../components/Foldable', () => ({
  Foldable: () => <div data-testid="foldable" />
}));

jest.mock('../../hooks/currency', () => ({
  useCurrency: () => ({ data: 'USD' }),
}));

const mockAirport = {
    airportName: 'Test Airport',
    airportCode: 'TST',
    eticketableAirport: true,
    internationalAirport: true,
    domesticAirport: false,
    regionalAirport: false,
    onlineIndicator: false,
    city: {
        cityCode: 'TCY',
        cityName: 'Test City',
        timeZoneName: 'Test/Zone'
    },
    country: {
        countryCode: 'TC',
        countryName: 'Test Country'
    },
    region: {
        regionCode: 'TR',
        regionName: 'Test Region'
    },
    state: {
        stateCode: 'TS',
        stateName: 'Test State'
    },
    location: {
        latitude: 0,
        latitudeDirection: 'N',
        latitudeRadius: 0,
        longitude: 0,
        longitudeDirection: 'E',
        longitudeRadius: 0,
        aboveSeaLevel: 10
    }
};

describe('AirportDetails Component', () => {
  test('renders airport details correctly', () => {
    render(<AirportDetails airport={mockAirport} />);

    expect(screen.getByText(/Test Airport/i)).toBeInTheDocument();
    expect(screen.getByText(/Test City/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Country/i)).toBeInTheDocument();
    expect(screen.getByText(/TST/i)).toBeInTheDocument();
  });
});