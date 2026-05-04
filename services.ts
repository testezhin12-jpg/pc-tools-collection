interface User { id: number; name: string; email: string; }

class UserService {
    private users: User[] = [];

    public addUser(user: User): void {
        this.users.push(user);
    }

    public getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    public getAllUsers(): User[] {
        return this.users;
    }

    public removeUser(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}

const userService = new UserService();

export { userService, User };