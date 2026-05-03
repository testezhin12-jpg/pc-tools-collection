// Utility functions for common operations

/**
 * Check if a value is a valid number.
 * @param value The value to check
 * @returns True if the value is a valid number, otherwise false
 */
export function isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * Generate a random integer between a given range.
 * @param min The minimum value (inclusive)
 * @param max The maximum value (exclusive)
 * @returns A random integer between min and max
 */
export function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Deep merge two objects.
 * @param target The target object to merge into
 * @param source The source object to merge from
 * @returns The merged object
 */
export function deepMerge(target: any, source: any): any {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object') {
            target[key] = target[key] || {};
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}