export function isObject(value: any): boolean {
    return value !== null && typeof value === 'object';
}

export function deepMerge<T>(target: T, source: Partial<T>): T {
    if (!isObject(target) || !isObject(source)) {
        return target;
    }

    const output = { ...target };

    for (const key of Object.keys(source)) {
        const value = source[key];
        if (isObject(value)) {
            if (!(key in target)) {
                Object.assign(output, { [key]: value });
            } else {
                output[key] = deepMerge(target[key], value);
            }
        } else {
            Object.assign(output, { [key]: value });
        }
    }
    return output;
}

export function cloneDeep<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function getNestedProperty(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((nestedObj, key) => {
        return (nestedObj && key in nestedObj) ? nestedObj[key] : undefined;
    }, obj);
}
