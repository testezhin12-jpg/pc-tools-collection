export function isEmpty<T>(value: T | null | undefined): boolean {
    return value === null || value === undefined || (typeof value === 'object' && Object.keys(value).length === 0);
}

export function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function throttle(func: Function, limit: number) {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return function(...args: any[]) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}
