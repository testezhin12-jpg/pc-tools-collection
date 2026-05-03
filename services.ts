import { SomeType } from './types';

// Caching results to improve performance
const cache: Record<string, SomeType> = {};

export const fetchData = async (key: string): Promise<SomeType> => {
    if (cache[key]) {
        return Promise.resolve(cache[key]);
    }

    // Simulating a network request
    const response = await simulateNetworkRequest(key);
    cache[key] = response;
    return response;
};

const simulateNetworkRequest = async (key: string): Promise<SomeType> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ key, data: `Data for ${key}` });
        }, 1000);
    });
};

export const clearCache = () => {
    Object.keys(cache).forEach(key => delete cache[key]);
};
