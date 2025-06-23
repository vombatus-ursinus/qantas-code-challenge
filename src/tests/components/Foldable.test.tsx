import { render, fireEvent } from '@testing-library/react';
import { Foldable } from '../../components/Foldable';
import '@testing-library/jest-dom';

describe('Foldable', () => {
  const props = {
    title: 'Details',
    moreInfo: ['Line 1', 'Line 2'],
  };

  it('renders title', () => {
    const { getByText } = render(<Foldable props={props} />);
    expect(getByText('Details')).toBeInTheDocument();
  });

  it('toggles content on click', () => {
    const { getByText, queryByText } = render(<Foldable props={props} />);
    //initiall state - hidden
    expect(queryByText('Line 1')).not.toBeInTheDocument();
    //click to expand
    fireEvent.click(getByText('Details'));
    expect(getByText('Line 1')).toBeInTheDocument();
    expect(getByText('Line 2')).toBeInTheDocument();
    //click to collapse
    fireEvent.click(getByText('Details'));
    expect(queryByText('Line 1')).not.toBeInTheDocument();
  });
});