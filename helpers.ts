/**
 * Checks if a value is an array.
 * @param value - The value to check.
 * @returns True if the value is an array, else false.
 */
function isArray(value: any): value is Array<any> {
    return Array.isArray(value);
}

/**
 * Merges two objects deeply.
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns The merged object.
 */
function deepMerge<T extends object, U extends object>(
    target: T,
    source: U
): T & U {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            const value = source[key];
            if (isArray(value)) {
                target[key] = [...(target[key] as any) || [], ...value];
            } else if (value && typeof value === 'object') {
                target[key] = deepMerge(target[key] as any, value);
            } else {
                target[key] = value;
            }
        }
    }
    return target as T & U;
}

/**
 * Generates a random UUID.
 * @returns A random UUID string.
 */
function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r % 4 + 8);
            return v.toString(16);
        });
}

export { isArray, deepMerge, generateUUID };