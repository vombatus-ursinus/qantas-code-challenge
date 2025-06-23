import { render, fireEvent } from '@testing-library/react';
import { Button } from '../../components/Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});