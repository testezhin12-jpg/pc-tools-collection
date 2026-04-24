export interface UserInput {
    name: string;
    age: number;
    email: string;
}

export function validateInput(input: UserInput): boolean {
    const nameValid = typeof input.name === 'string' && input.name.trim() !== '';
    const ageValid = typeof input.age === 'number' && input.age > 0;
    const emailValid = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/.test(input.email);

    return nameValid && ageValid && emailValid;
}

export function processInput(input: UserInput): void {
    if (!validateInput(input)) {
        throw new Error('Invalid input data');
    }
    console.log('Processing input:', input);
}
