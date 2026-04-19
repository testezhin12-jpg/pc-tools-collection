export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    inStock: boolean;
}

export interface Order {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
    orderDate: Date;
}

export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    message?: string;
};

export type UserRole = 'admin' | 'user' | 'guest';

export const DEFAULT_USER_ROLE: UserRole = 'user';

export interface Pagination<T> {
    items: T[];
    totalCount: number;
    page: number;
    pageSize: number;
};
