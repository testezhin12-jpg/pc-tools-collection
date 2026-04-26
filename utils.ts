// Utility function to perform network operations with retry logic

export async function fetchWithRetry(url: string, options: RequestInit = {}, retries: number = 3, backoff: number = 300): Promise<Response> {
    let attempts = 0;
    while (attempts < retries) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response;
        } catch (error) {
            if (attempts < retries - 1) {
                const delay = backoff * Math.pow(2, attempts);
                await new Promise(res => setTimeout(res, delay));
            } else {
                throw error; // Rethrow the last error after retries exhausted
            }
        }
        attempts++;
    }
    throw new Error('Max retries reached');
}