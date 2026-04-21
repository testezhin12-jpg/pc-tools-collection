/**
 * Represents a User in the system.
 * @interface User
 */
interface User {
    /**
     * Unique identifier for the user.
     * @type {string}
     */
    id: string;
    /**
     * The user's full name.
     * @type {string}
     */
    name: string;
    /**
     * The user's email address.
     * @type {string}
     */
    email: string;
    /**
     * The user's age.
     * @type {number}
     */
    age: number;
    /**
     * Indicates if the user is active.
     * @type {boolean}
     */
    isActive: boolean;
}

/**
 * Represents a Product in the inventory.
 * @interface Product
 */
interface Product {
    /**
     * Unique identifier for the product.
     * @type {string}
     */
    id: string;
    /**
     * Name of the product.
     * @type {string}
     */
    title: string;
    /**
     * Price of the product.
     * @type {number}
     */
    price: number;
    /**
     * Stock quantity of the product.
     * @type {number}
     */
    quantity: number;
}