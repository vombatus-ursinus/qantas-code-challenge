import currencyCodes from 'currency-codes';
import { REACT_APP_CURRENCY_API_URL } from '../config';
import { useEffect, useState } from 'react';

const local = (countryCode: string): string => {    
    const result = currencyCodes.country(countryCode);
    return result.length > 0 
        ? result.map((c) => c.currency).filter(Boolean).join(', ') 
        : '';
}

const fromApi = async (countryCode: string): Promise<{ currency: string; error?: string }> => {
    try {
        const response = await fetch(`${REACT_APP_CURRENCY_API_URL}/${countryCode}`);
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        const currencies = data[0]?.currencies;
        //sometimes there are multiple currencies for one country
        const ret = currencies 
            ? Object.values(currencies)
                .map((c: any) => c.name)
                .filter(Boolean)
                .join(', ') 
            : '';
        return { currency: ret }
    } catch (err) {
        return { currency: '', error: err instanceof Error ? err.message : 'Unknown error' };
    }
}

const currencyCache: Record<string, string> = {};

export const useCurrency = (countryCode: string) => {
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<string>(currencyCache[countryCode] || '');

    useEffect(() => {
        let isMounted = true;

        //trin to get from cache first
        if (currencyCache[countryCode]) {
            setData(currencyCache[countryCode]);
            return; //skippin API call if we have cached data
        }

        //if no cache - try local lookup
        const currency = local(countryCode);
        if (currency) {
            currencyCache[countryCode] = currency;
            if (isMounted) {
                setData(currency);
                return; //skip API call if got some local data
            }
        }

        //only call API if no cache available - save some bandwidth
        fromApi(countryCode).then(result => {
            if (!isMounted) return;
            
            setError(result.error || null);
            
            if (result.error) {
                if (!data) {
                    setData('');
                }
            } else {
                currencyCache[countryCode] = result.currency;
                setData(result.currency);
            }
        });

        return () => { isMounted = false; };
    }, [countryCode]);
        
    return { data, error };
}

