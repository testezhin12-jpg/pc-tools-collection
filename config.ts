export interface UserInput {
    inputValue: string;
}

export function validateInput(input: UserInput): boolean {
    const trimmedInput = input.inputValue.trim();
    // Check for empty string
    if (trimmedInput.length === 0) {
        console.error('Input cannot be empty.');
        return false;
    }
    // Check for maximum length
    if (trimmedInput.length > 100) {
        console.error('Input exceeds maximum length of 100 characters.');
        return false;
    }
    // Validate for specific format (if required)
    const validFormat = /^[a-zA-Z0-9]*$/;
    if (!validFormat.test(trimmedInput)) {
        console.error('Input contains invalid characters. Only alphanumeric characters are allowed.');
        return false;
    }
    return true;
}

export function processInput(input: UserInput): void {
    if (validateInput(input)) {
        console.log('Processing input: ', input.inputValue);
        // Main processing logic here
    } else {
        console.error('Input validation failed.');
    }
}