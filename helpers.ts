function isValidInput(input: string): boolean {
    // Check if input is not empty and is a string
    return typeof input === 'string' && input.trim().length > 0;
}

function processInput(input: string): string {
    if (!isValidInput(input)) {
        throw new Error('Invalid input: must be a non-empty string.');
    }
    // Continue processing valid input
    return input.toUpperCase(); // Example transformation
}

function mainProcessingLoop(inputs: string[]): string[] {
    const results: string[] = [];
    for (const input of inputs) {
        try {
            const result = processInput(input);
            results.push(result);
        } catch (error) {
            console.error(`Error processing input '${input}': ${error.message}`);
        }
    }
    return results;
}

// Example usage
const userInputs = ['hello', ' ', 'world', ''];
const output = mainProcessingLoop(userInputs);
console.log(output);