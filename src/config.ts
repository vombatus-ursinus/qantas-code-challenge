const apiUrl = process.env.REACT_APP_AIRPORTS_API_URL;
if (!apiUrl) {
    throw new Error('AIRPORTS_API_URL environment variable is not set.');
}

const currencyApiUrl = process.env.REACT_APP_CURRENCY_API_URL;
if (!currencyApiUrl) {
    console.warn('CURRENCY_API_URL environment variable is not set. Currency lookup may not work.');
}

export const REACT_APP_AIRPORTS_API_URL = apiUrl;
export const REACT_APP_CURRENCY_API_URL = currencyApiUrl;