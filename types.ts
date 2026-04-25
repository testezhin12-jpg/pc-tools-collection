export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

export interface Order {
    orderId: number;
    userId: number;
    productIds: number[];
    totalAmount: number;
    orderDate: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export type UserRole = 'admin' | 'user' | 'guest';
