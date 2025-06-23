import { renderHook } from '@testing-library/react';
import { act } from '@testing-library/react';
import { useCurrency } from '../../hooks/currency';

const mockCurrencyData = {
  AU: [{ currencies: { AUD: { name: 'Australian Dollar' } } }],
  US: [{ currencies: { USD: { name: 'United States Dollar' } } }]
};

describe('useCurrency', () => {
  beforeEach(() => {
    jest.resetModules();
    global.fetch = jest.fn();
  });

  it('fetches and returns currency data', async () => {
    const mockResponse = {
      ok: true,
      json: async () => mockCurrencyData.AU
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useCurrency('AU'));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.data).toBe('Australian Dollar');
    expect(result.current.error).toBeNull();
  });

  it('uses cache for subsequent requests', async () => {
    const mockResponse = {
      ok: true,
      json: async () => mockCurrencyData.US
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    //first render
    const { result } = renderHook(() => useCurrency('US'));
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.data).toBe('United States Dollar');

    //reset mock to verify cache usage
    (global.fetch as jest.Mock).mockClear();

    //second render should use cache
    const { result: result2 } = renderHook(() => useCurrency('US'));
    expect(result2.current.data).toBe('United States Dollar');
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('handles fetch errors', async () => {
    const mockResponse = {
      ok: false,
      status: 500
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useCurrency('XX'));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.data).toBe('');
    expect(result.current.error).toBe('HTTP error status: 500');
  });

  it('uses local fallback when API fails', async () => {
    const mockResponse = {
      ok: false,
      status: 500
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useCurrency('AU'));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.data).toBe('Australian Dollar');
  });
});