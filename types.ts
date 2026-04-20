/* Represents a generic tool in the PC tools collection */

type Tool = {
    id: number;  // Unique identifier for each tool
    name: string;  // Name of the tool
    description: string;  // Brief description of the tool
    isAvailable: boolean;  // Availability status of the tool
    category: ToolCategory;  // Category to which the tool belongs
};

/* Enum for tool categories */
type ToolCategory = 'hardware' | 'software' | 'utility' | 'accessory';

/* Represents a user in the system */
type User = {
    userId: number;  // Unique identifier for the user
    username: string;  // Username chosen by the user
    email: string;  // User's email address
    registered: Date;  // Registration date of the user
};

/* Represents a collection of tools */
type ToolCollection = {
    tools: Tool[];  // Array of tools in the collection
    totalCount: number;  // Total number of tools
};
