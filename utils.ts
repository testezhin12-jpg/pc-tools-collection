export async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    let attempt = 0;
    while (attempt < retries) {
        try {
            return await fn();
        } catch (error) {
            if (attempt < retries - 1) {
                await new Promise(res => setTimeout(res, delay));
            } else {
                throw error;
            }
        }
        attempt++;
    }
}

export function isNetworkError(error: any): boolean {
    return error && (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED');
}

export async function fetchWithRetry(url: string, options: RequestInit = {}, retries: number = 3): Promise<Response> {
    return retry(() => fetch(url, options), retries);
}