// TypeScript interface for a user
interface User {
    /**
     * Unique identifier for the user
     */
    id: string;

    /**
     * The user's full name
     */
    name: string;

    /**
     * The user's email address
     */
    email: string;

    /**
     * The user's age (optional)
     */
    age?: number;
}

/**
 * Type for a function that accepts a user and returns a boolean indicating success.
 * @param user - The user to be processed
 * @returns True if successful, false otherwise
 */
type UserProcessor = (user: User) => boolean;

/**
 * Type for the response from the user creation service
 */
interface UserCreationResponse {
    /**
     * Indicates if the user creation was successful
     */
    success: boolean;

    /**
     * Message providing additional info about the operation
     */
    message: string;

    /**
     * The created user object, if successful
     */
    user?: User;
}

export { User, UserProcessor, UserCreationResponse };