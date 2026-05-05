export function validateInput(input: any): boolean {
    if (typeof input !== 'string') {
        console.error('Input must be a string');
        return false;
    }
    if (input.trim() === '') {
        console.error('Input cannot be empty');
        return false;
    }
    return true;
}

export function processInput(input: string): void {
    const isValid = validateInput(input);
    if (!isValid) {
        return;
    }
    // Proceed with further processing of valid input
    console.log('Processing:', input);
    // ... additional processing logic
}

export function main() {
    const inputs = ['valid input', '   ', 42, 'another valid input'];
    inputs.forEach((input) => {
        processInput(input);
    });
}