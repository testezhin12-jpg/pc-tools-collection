export function isEmpty<T>(obj: T): boolean {
    return obj === null || obj === undefined || (typeof obj === 'object' && Object.keys(obj).length === 0);
}

export function debounce<F extends (...args: any[]) => any>(func: F, delay: number): (...args: Parameters<F>) => void {
    let timeoutId: NodeJS.Timeout | null = null;
    return (...args: Parameters<F>): void => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export function throttle<F extends (...args: any[]) => any>(func: F, limit: number): (...args: Parameters<F>) => void {
    let lastFunc: NodeJS.Timeout | null = null;
    let lastRan: number | null = null;
    return (...args: Parameters<F>): void => {
        if (lastRan === null || (Date.now() - lastRan) >= limit) {
            func(...args);
            lastRan = Date.now();
        } else {
            if (lastFunc) {
                clearTimeout(lastFunc);
            }
            lastFunc = setTimeout(() => {
                func(...args);
                lastRan = Date.now();
            }, limit - (Date.now() - lastRan));
        }
    };
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function mergeDeep<T>(target: T, source: Partial<T>): T {
    const output = { ...target };
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object') {
            output[key] = mergeDeep(target[key] as T, source[key] as Partial<T>);
        } else {
            output[key] = source[key];
        }
    }
    return output;
}