// Helper functions for common operations

/**
 * Function to generate a random string of specified length.
 * @param length - Desired length of the generated string.
 * @returns Randomly generated string.
 */
function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Function to debounce another function.
 * @param func - The function to debounce.
 * @param delay - Duration in milliseconds to wait before calling.
 * @returns A debounced function.
 */
function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function(this: any, ...args: any[]) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
}

/**
 * Function to filter an array based on a predicate function.
 * @param array - The array to filter.
 * @param predicate - A function that defines the condition.
 * @returns A new array with elements that pass the test.
 */
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
}

export { generateRandomString, debounce, filterArray };