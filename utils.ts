function isEmpty(obj: Record<string, unknown>): boolean {
    return Object.keys(obj).length === 0;
}

function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

function mergeDeep<T>(target: T, ...sources: Partial<T>[]): T {
    if (!sources.length) return target;
    const source = sources.shift();

    if (typeof target === 'object' && target !== null && source) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] === 'object' && source[key] !== null) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
    }
    return mergeDeep(target, ...sources);
}

function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export { isEmpty, deepClone, mergeDeep, debounce };