export interface InputData {
    username: string;
    age: number;
    email: string;
}

export function validateInput(data: InputData): string[] {
    const errors: string[] = [];

    if (!data.username || data.username.length < 3) {
        errors.push('Username must be at least 3 characters long.');
    }
    if (data.age < 0 || data.age > 120) {
        errors.push('Age must be a valid number between 0 and 120.');
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(data.email)) {
        errors.push('Email format is invalid.');
    }

    return errors;
}

export function processInput(data: InputData): void {
    const validationErrors = validateInput(data);
    if (validationErrors.length > 0) {
        console.error('Validation Errors:', validationErrors);
        return;
    }
    console.log('Input data is valid:', data);
    // Proceed with main processing logic...
}