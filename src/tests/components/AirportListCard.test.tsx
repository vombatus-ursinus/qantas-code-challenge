import { render, fireEvent } from '@testing-library/react';
import { AirportListCard } from '../../components/AirportListCard';
import '@testing-library/jest-dom';

const mockAirport = {
  airportName: 'Sydney Airport',
  airportCode: 'SYD',
  country: { countryName: 'Australia' },
};

describe('AirportListCard', () => {
  it('renders airport name and country', () => {
    const { getByText } = render(
      <AirportListCard airport={mockAirport as any} onClick={() => {}} />
    );
    expect(getByText('Sydney Airport')).toBeInTheDocument();
    expect(getByText('Australia')).toBeInTheDocument();
  });

  it('calls onClick with airport code when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <AirportListCard airport={mockAirport as any} onClick={handleClick} />
    );
    fireEvent.click(getByText('Sydney Airport'));
    expect(handleClick).toHaveBeenCalledWith('SYD');
  });

  it('renders chevron icon', () => {
    const { container } = render(
      <AirportListCard airport={mockAirport as any} onClick={() => {}} />
    );
    expect(container.querySelector('.chevron svg')).toBeInTheDocument();
  });
});