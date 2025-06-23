import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AirportsScreen from '../../screens/AirportListScreen';
import { useAirports } from '../../hooks/airports';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../hooks/airports', () => ({
  useAirports: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

const mockAirports = [
  {
    airportName: 'Test Airport',
    airportCode: 'TST',
    city: { cityName: 'Test City' },
    country: { countryName: 'Test Country' }
  },
  {
    airportName: 'Another Airport',
    airportCode: 'ANT',
    city: { cityName: 'Another City' },
    country: { countryName: 'Another Country' }
  }
];

const renderWithRouter = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  );
};

describe('AirportListScreen', () => {
  beforeEach(() => {
    (useAirports as jest.Mock).mockReturnValue({
      data: mockAirports,
      error: null,
      fetching: false
    });
  });

  it('renders loading state', () => {
    (useAirports as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      fetching: true
    });

    renderWithRouter(<AirportsScreen />);
    expect(document.querySelector('.airplane-loader')).toBeInTheDocument();
 });

  it('renders error state', () => {
    (useAirports as jest.Mock).mockReturnValue({
      data: null,
      error: 'Failed to fetch',
      fetching: false
    });

    renderWithRouter(<AirportsScreen />);
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });

  it('renders airport list', () => {
    renderWithRouter(<AirportsScreen />);
    
    expect(screen.getByText('Test Airport')).toBeInTheDocument();
    expect(screen.getByText('Another Airport')).toBeInTheDocument();
  });
});