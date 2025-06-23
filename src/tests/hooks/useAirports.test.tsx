import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useAirports } from '../../hooks/airports';

const mockAirports = [
  { airportName: 'Test Airport', airportCode: 'TST' },
  { airportName: 'Another Airport', airportCode: 'ANT' },
];

describe('useAirports', () => {
  beforeEach(() => {
    jest.resetModules();
    global.fetch = jest.fn();
  });

  it('fetches and returns airport data', async () => {
    const mockResponse = {
      ok: true,
      json: async () => mockAirports
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAirports());

    //initial state
    expect(result.current.fetching).toBe(true);

    //wait for all state updates to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    //final state
    expect(result.current.data).toEqual(mockAirports);
    expect(result.current.fetching).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('sets error on fetch failure', async () => {
    const mockResponse = {
      ok: false,
      status: 500
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAirports());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.error).toBe('HTTP error status: 500');
    expect(result.current.fetching).toBe(false);
  });

  it('uses cache if available', async () => {
    //first render to populate cache
    const mockResponse = {
      ok: true,
      json: async () => mockAirports
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAirports());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    //second render should use cache immediately
    const { result: result2 } = renderHook(() => useAirports());
    
    //check that cache is used immediately
    expect(result2.current.data).toEqual(mockAirports);
    expect(result2.current.fetching).toBe(false);
    
    //wait for background fetch to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    //data should still be the same after background fetch
    expect(result2.current.data).toEqual(mockAirports);
    expect(result2.current.fetching).toBe(false);
  });
});