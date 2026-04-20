function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

function isEmpty(obj: Record<string, unknown>): boolean {
    return Object.keys(obj).length === 0;
}

function mergeDeep<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], mergeDeep(target[key] as T, source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

function debounce(func: (...args: unknown[]) => void, wait: number): (...args: unknown[]) => void {
    let timeoutId: NodeJS.Timeout;
    return function (...args: unknown[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

export { deepClone, isEmpty, mergeDeep, debounce };