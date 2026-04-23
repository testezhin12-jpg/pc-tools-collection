export interface PerformanceMetrics {
    executionTime: number;
    memoryUsage: number;
    requestCount: number;
}

export interface OptimizedFunction<T> {
    (input: T): Promise<PerformanceMetrics>;
}

export function createOptimizedFunction<T>(
    fn: (input: T) => Promise<any>
): OptimizedFunction<T> {
    return async (input: T): Promise<PerformanceMetrics> => {
        const startTime = performance.now();
        const initialMemory = performance.memory.usedJSHeapSize;
        const result = await fn(input);
        const endTime = performance.now();
        const finalMemory = performance.memory.usedJSHeapSize;

        return {
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            requestCount: 1,
        };
    };
}