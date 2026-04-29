import axios, { AxiosError } from 'axios';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

async function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, options = {}, retries = MAX_RETRIES): Promise<any> {
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        if (retries === 0) {
            throw error;
        }
        const axiosError = error as AxiosError;
        console.warn(`Request failed with status ${axiosError.response?.status}. Retrying...`);
        await delay(RETRY_DELAY_MS);
        return fetchWithRetry(url, options, retries - 1);
    }
}

export { fetchWithRetry };