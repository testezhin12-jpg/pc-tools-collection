function parseJSON(jsonString: string): any {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        console.warn('Invalid email format:', email);
        return false;
    }
    return true;
}

function safeDivide(numerator: number, denominator: number): number | null {
    if (denominator === 0) {
        console.error('Division by zero error.');
        return null;
    }
    return numerator / denominator;
}

export { parseJSON, validateEmail, safeDivide };