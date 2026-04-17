export function isEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function mergeDeep<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], mergeDeep(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

export function debounce(fn: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}