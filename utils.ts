type Data = Record<string, any>;

type FilterFunction<T> = (item: T) => boolean;

type SortFunction<T> = (a: T, b: T) => number;

/**
 * Filters an array of data based on a filter function.
 * @param data - The array of data to be filtered.
 * @param filter - A function to test each item.
 * @returns A new array containing items that pass the filter.
 */
function filterData<T>(data: T[], filter: FilterFunction<T>): T[] {
    return data.filter(filter);
}

/**
 * Sorts an array of data based on a sort function.
 * @param data - The array of data to be sorted.
 * @param sort - A function that defines the sort order.
 * @returns A new sorted array.
 */
function sortData<T>(data: T[], sort: SortFunction<T>): T[] {
    return [...data].sort(sort);
}

/**
 * Merges two arrays into one, excluding duplicates.
 * @param array1 - The first array to merge.
 * @param array2 - The second array to merge.
 * @returns A new array with unique items from both arrays.
 */
function mergeUnique<T>(array1: T[], array2: T[]): T[] {
    return Array.from(new Set([...array1, ...array2]));
}

export { filterData, sortData, mergeUnique, Data };