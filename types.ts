export interface ApiResponse<T> {
    data: T;
    error?: string;
    status: 'success' | 'error';
}

export type User = {
    id: string;
    name: string;
    email: string;
};

export function handleApiResponse<T>(response: ApiResponse<T>): T | null {
    if (response.status === 'error') {
        console.error(`Error: ${response.error}`);
        return null;
    }
    return response.data;
}

export function validateUser(user: User): boolean {
    if (!user.id || !user.name || !user.email) {
        console.warn(`Invalid user data: ${JSON.stringify(user)}`);
        return false;
    }
    return true;
}

export function fetchUserById(userId: string): ApiResponse<User> {
    try {
        // Simulated fetch operation
        const mockResponse: ApiResponse<User> = {
            data: { id: userId, name: 'John Doe', email: 'john@example.com' },
            status: 'success'
        };
        return mockResponse;
    } catch (error) {
        console.error(`Failed to fetch user: ${(error as Error).message}`);
        return { data: null, status: 'error', error: 'Failed to fetch user' };
    }
}