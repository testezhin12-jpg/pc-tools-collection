// Service to handle user management
interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [];

// Function to add a user
function addUser(name: string, email: string): User {
    const newUser: User = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
}

// Function to get all users
function getUsers(): User[] {
    return users;
}

// Function to find a user by ID
function findUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}

// Function to delete a user by ID
function deleteUserById(id: number): boolean {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
}

export { addUser, getUsers, findUserById, deleteUserById };