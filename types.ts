export interface UserInput {
    age: number;
    email: string;
}

export function validateUserInput(input: UserInput): boolean {
    if (input.age < 0 || input.age > 120) {
        console.error('Invalid age: Must be between 0 and 120');
        return false;
    }
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(input.email)) {
        console.error('Invalid email format');
        return false;
    }
    return true;
}