function isEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
}

function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

function mergeObjects<T>(target: T, source: Partial<T>): T {
    return { ...target, ...source };
}

function filterKeys<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Omit<T, K> {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}

function isArrayOf<T>(arr: any[], typeCheck: (item: any) => item is T): arr is T[] {
    return arr.every(typeCheck);
}

export { isEmpty, deepClone, mergeObjects, filterKeys, isArrayOf };