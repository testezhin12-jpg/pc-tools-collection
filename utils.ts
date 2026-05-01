export function safeParseJSON<T>(jsonString: string): T | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
}

export function validateStringInput(input: string): boolean {
    if (typeof input !== 'string' || input.trim() === '') {
        console.error('Invalid string input.');
        return false;
    }
    return true;
}

export function handleApiResponse(response: Response): Promise<any> {
    if (!response.ok) {
        console.error('API call failed with status:', response.status);
        return Promise.reject(new Error('API request failed')); 
    }
    return response.json();
}

export function calculatePercentage(part: number, total: number): number | null {
    if (total === 0) {
        console.error('Total cannot be zero for percentage calculation.');
        return null;
    }
    return (part / total) * 100;
}
