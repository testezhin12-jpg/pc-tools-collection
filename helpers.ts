// A set of utility functions for error handling

export function handleError(error: unknown): string {
    if (error instanceof Error) {
        // Return the error message if it's an instance of Error
        return error.message;
    }
    // For unexpected error types, return a generic message
    return 'An unknown error occurred';
}

export function validateInput(input: any): boolean {
    // Check if input is defined and not null
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null');
    }
    // Further validation can be added as needed
    return true;
}

export function processData(data: any[]): void {
    try {
        data.forEach(item => {
            validateInput(item);
            // Perform processing on valid item
            console.log('Processing:', item);
        });
    } catch (error) {
        const message = handleError(error);
        console.error(message);
    }
}