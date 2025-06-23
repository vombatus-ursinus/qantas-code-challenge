import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AirplaneLoader from '../../components/AirplaneLoader';

describe('Loader Component', () => {
    it('has the airplane-loader class', () => {
        const { container } = render(<AirplaneLoader />);
        expect(container.querySelector('.airplane-loader')).toBeInTheDocument();
    });
});