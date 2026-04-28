type InputData = {
    value: string;
};

function isValidInput(input: InputData): boolean {
    const regex = /^[a-zA-Z0-9_]+$/; // Only allows alphanumeric and underscores
    return regex.test(input.value);
}

function processInputData(data: InputData): string {
    if (!isValidInput(data)) {
        throw new Error('Invalid input: must be alphanumeric and underscore');
    }
    // Process the valid input as needed
    return `Processed input: ${data.value}`;
}

function main(inputs: InputData[]): void {
    inputs.forEach(input => {
        try {
            const result = processInputData(input);
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });
}

// Example usage
const inputs: InputData[] = [ { value: 'valid_input' }, { value: 'invalid input!' } ];
main(inputs);