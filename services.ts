type User = {
    id: number;
    name: string;
    email: string;
};

/**
 * Fetches a user by ID.
 * @param userId The ID of the user to fetch.
 * @returns A promise that resolves to the user object.
 */
async function fetchUserById(userId: number): Promise<User | null> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`Error fetching user: ${response.statusText}`);
        }
        const user: User = await response.json();
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Creates a new user.
 * @param user A user object containing name and email.
 * @returns A promise that resolves to the created user object.
 */
async function createUser(user: Omit<User, 'id'>): Promise<User> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error(`Error creating user: ${response.statusText}`);
        }
        const createdUser: User = await response.json();
        return createdUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { fetchUserById, createUser };