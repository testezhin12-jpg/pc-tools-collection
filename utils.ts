// Utility functions for string manipulations

/**
 * Capitalizes the first letter of a string.
 * @param str - The input string to capitalize.
 * @returns A new string with the first letter capitalized.
 */
function capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to kebab-case.
 * @param str - The input string to convert.
 * @returns A kebab-cased version of the input string.
 */
function toKebabCase(str: string): string {
    return str
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-]+/g, '')
        .toLowerCase();
}

/**
 * Reverses a given string.
 * @param str - The string to reverse.
 * @returns A new string that is the reverse of the input string.
 */
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export { capitalizeFirstLetter, toKebabCase, reverseString };