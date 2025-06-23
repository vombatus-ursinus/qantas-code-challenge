import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { AirportList } from '../../components/AirportList';
import '@testing-library/jest-dom';

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
    }, {
        airportName: 'Airport Two',
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

describe('AirportList', () => {
    test('renders airport list', () => {
        render(<AirportList airports={mockAirports} onSelect={() => {}} />);
        
        expect(screen.getByText('Airport One')).toBeInTheDocument();
        expect(screen.getByText('Airport Two')).toBeInTheDocument();
    });

    test('calls onSelect when an airport is clicked', () => {
        const handleSelect = jest.fn();
        render(<AirportList airports={mockAirports} onSelect={handleSelect} />);
        
        fireEvent.click(screen.getByText('Airport One'));
        expect(handleSelect).toHaveBeenCalledWith(mockAirports[0].airportCode);
    });
});