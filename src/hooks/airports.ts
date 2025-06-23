import { useEffect, useState } from 'react';
import { Airport } from '../types/airport';
import { REACT_APP_AIRPORTS_API_URL } from '../config';

let airportCache: Airport[] | null = null;

export const useAirports = () => {
    const [data, setData] = useState<Airport[] | null>(airportCache);
    const [fetching, setFetching] = useState<boolean>(!airportCache);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        //if we have cache, show it immediately and keep fetchin in background
        if (airportCache) {
            setData(airportCache);
            setFetching(false);
        } else {
            setFetching(true); //so we only show beautifuk B747 loader if nothing in cache
        }

        const fetchData = async () => {
            try {
                const response = await fetch(REACT_APP_AIRPORTS_API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                const result = await response.json();
                
                if (isMounted) {
                    airportCache = result;
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Unknown error');
                }
            } finally {
                if (isMounted) setFetching(false);
            }
        };
        fetchData();

        return () => { isMounted = false; };
    }, []);

    return { data, fetching, error };
};