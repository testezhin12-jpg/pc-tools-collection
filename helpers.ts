async function retry<T>(fn: () => Promise<T>, attempts: number, delay: number): Promise<T> {
    let lastError;
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn(); // Attempt the operation
        } catch (error) {
            lastError = error; // Store the last error
            if (i < attempts - 1) {
                await new Promise(res => setTimeout(res, delay)); // Wait before retrying
            }
        }
    }
    throw lastError; // Throw the last error after all attempts fail
}

export { retry };