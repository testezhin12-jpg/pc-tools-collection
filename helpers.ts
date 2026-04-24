export function isEmpty(obj: Record<string, unknown>): boolean {
    return Object.keys(obj).length === 0;
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function mergeDeep<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object') {
            if (!target[key]) {
                Object.assign(target, { [key]: {} });
            }
            mergeDeep(target[key] as T, source[key] as T);
        } else {
            Object.assign(target, { [key]: source[key] });
        }
    }
    return target;
}

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: NodeJS.Timeout;
    return function(this: any, ...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    } as T;
}

export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return function(this: any, ...args: any[]) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
            if ((Date.now() - lastRan) >= limit) {
                func.apply(context, args);
                lastRan = Date.now();
            }
        }, limit - (Date.now() - lastRan));
    } as T;
}
