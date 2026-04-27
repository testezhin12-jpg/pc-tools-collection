/**
 * Calculates the total price including tax.
 * @param basePrice - The initial price before tax.
 * @param taxRate - The tax rate to be applied as a percentage.
 * @returns The total price after tax.
 */
function calculateTotalPrice(basePrice: number, taxRate: number): number {
    if (basePrice < 0 || taxRate < 0) {
        throw new Error('Base price and tax rate must be non-negative.');
    }
    return basePrice + (basePrice * (taxRate / 100));
}

/**
 * Fetches data from a given URL.
 * @param url - The URL to fetch data from.
 * @returns A promise that resolves to the fetched data.
 */
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    return response.json();
}

/**
 * Formats a date to a specified string format.
 * @param date - The date to format.
 * @param format - The desired date format.
 * @returns The formatted date string.
 */
function formatDate(date: Date, format: string): string {
    const options: Intl.DateTimeFormatOptions = {};
    if (format.includes('yyyy')) options.year = 'numeric';
    if (format.includes('MM')) options.month = '2-digit';
    if (format.includes('dd')) options.day = '2-digit';
    return new Intl.DateTimeFormat('en-US', options).format(date);
}