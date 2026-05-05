function isEmpty(value: any): boolean {
    if (value === null || value === undefined) {
        return true;
    } else if (typeof value === 'string') {
        return value.trim().length === 0;
    } else if (Array.isArray(value)) {
        return value.length === 0;
    } else if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }
    return false;
}

function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
    sources.forEach(source => {
        if (source) {
            Object.keys(source).forEach(key => {
                const sourceValue = source[key];
                const targetValue = target[key];
                if (isEmpty(targetValue) || typeof targetValue !== 'object') {
                    target[key] = sourceValue;
                } else {
                    target[key] = deepMerge(targetValue, sourceValue);
                }
            });
        }
    });
    return target;
}

function flattenArray<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

export { isEmpty, deepMerge, flattenArray };