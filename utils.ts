export function memoize(fn: Function): Function {
    const cache: { [key: string]: any } = {};
    return function (...args: any[]) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

export function debounce(func: Function, wait: number): Function {
    let timeout: NodeJS.Timeout | null;
    return function (...args: any[]) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func: Function, limit: number): Function {
    let lastFunc: NodeJS.Timeout | null;
    let lastRan = 0;
    return function (...args: any[]) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            if (Date.now() - lastRan >= limit) {
                func.apply(context, args);
                lastRan = Date.now();
            }
        }
    };
}