import { IMap } from './interfaces';
/** A super-inefficient sorted list for testing purposes */
export default class SortedArray<K = any, V = any> implements IMap<K, V> {
    a: [K, V][];
    cmp: (a: K, b: K) => number;
    constructor(entries?: [K, V][], compare?: (a: K, b: K) => number);
    get size(): number;
    get(key: K, defaultValue?: V): V | undefined;
    set(key: K, value: V, overwrite?: boolean): boolean;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    getArray(): [K, V][];
    minKey(): K | undefined;
    maxKey(): K | undefined;
    forEach(callbackFn: (v: V, k: K, list: SortedArray<K, V>) => void): void;
    [Symbol.iterator](): IterableIterator<[K, V]>;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    indexOf(key: K, failXor: number): number;
}
