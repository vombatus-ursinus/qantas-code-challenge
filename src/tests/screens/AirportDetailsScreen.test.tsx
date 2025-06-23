import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AirportDetailsScreen from '../../screens/AirportDetailsScreen';
import { useAirports } from '../../hooks/airports';

jest.mock('../../hooks/airports');
jest.mock('react-router-dom', () => ({
  useParams: () => ({ airportCode: 'TST' }),
  useNavigate: () => jest.fn()
}));

jest.mock('../../hooks/airports');


const mockAirports = [
    {
        airportName: 'Airport One',
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
    }
];

describe('AirportDetailsScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useAirports as jest.Mock).mockReturnValue({
      data: mockAirports,
      error: null,
      fetching: false
    });
  });

  it('renders airport details', () => {
    render(<AirportDetailsScreen />);
    expect(screen.getByRole('heading', { name: mockAirports[0].airportName })).toBeInTheDocument();
  });

  it('handles airport not found', () => {
    (useAirports as jest.Mock).mockReturnValue({
      data: [],
      error: null,
      fetching: false
    });

    render(<AirportDetailsScreen />);
    expect(screen.getByText(/No airport found./i)).toBeInTheDocument();
  });

  it('renders loading state', () => {
    (useAirports as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      fetching: true
    });

    render(<AirportDetailsScreen />);
    expect(document.querySelector('.airplane-loader')).toBeInTheDocument();
  });
});