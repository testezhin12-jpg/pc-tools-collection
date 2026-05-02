export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

export interface Order {
    id: number;
    userId: number;
    productIds: number[];
    totalAmount: number;
    status: 'pending' | 'completed' | 'canceled';
}

export type ApiResponse<T> = {
    data: T;
    error?: string;
    success: boolean;
};

export type PaginatedResponse<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
};