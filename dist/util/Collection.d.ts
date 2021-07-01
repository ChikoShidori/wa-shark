export interface CollectionConstructor {
    new (): Collection<unknown, unknown>;
    new <K, V>(entries?: ReadonlyArray<readonly [K, V]> | null): Collection<K, V>;
    new <K, V>(iterable: Iterable<readonly [K, V]>): Collection<K, V>;
    readonly prototype: Collection<unknown, unknown>;
    readonly [Symbol.species]: CollectionConstructor;
}
export declare class Collection<K, V> extends Map<K, V> {
    static readonly default: typeof Collection;
    ['constructor']: typeof Collection;
    get(key: K): V | undefined;
    set(key: K, value: V): this;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    hasAll(...keys: K[]): boolean;
    hasAny(...keys: K[]): boolean;
    first(): V | undefined;
    first(amount: number): V[];
    firstKey(): K | undefined;
    firstKey(amount: number): K[];
    last(): V | undefined;
    last(amount: number): V[];
    lastKey(): K | undefined;
    lastKey(amount: number): K[];
    random(): V;
    random(amount: number): V[];
    randomKey(): K;
    randomKey(amount: number): K[];
    find<V2 extends V>(fn: (value: V, key: K, collection: this) => value is V2): V2 | undefined;
    find(fn: (value: V, key: K, collection: this) => boolean): V | undefined;
    find<This, V2 extends V>(fn: (this: This, value: V, key: K, collection: this) => value is V2, thisArg: This): V2 | undefined;
    find<This>(fn: (this: This, value: V, key: K, collection: this) => boolean, thisArg: This): V | undefined;
    findKey<K2 extends K>(fn: (value: V, key: K, collection: this) => key is K2): K2 | undefined;
    findKey(fn: (value: V, key: K, collection: this) => boolean): K | undefined;
    findKey<This, K2 extends K>(fn: (this: This, value: V, key: K, collection: this) => key is K2, thisArg: This): K2 | undefined;
    findKey<This>(fn: (this: This, value: V, key: K, collection: this) => boolean, thisArg: This): K | undefined;
    sweep(fn: (value: V, key: K, collection: this) => boolean): number;
    sweep<T>(fn: (this: T, value: V, key: K, collection: this) => boolean, thisArg: T): number;
    filter<K2 extends K>(fn: (value: V, key: K, collection: this) => key is K2): Collection<K2, V>;
    filter<V2 extends V>(fn: (value: V, key: K, collection: this) => value is V2): Collection<K, V2>;
    filter(fn: (value: V, key: K, collection: this) => boolean): this;
    filter<This, K2 extends K>(fn: (this: This, value: V, key: K, collection: this) => key is K2, thisArg: This): Collection<K2, V>;
    filter<This, V2 extends V>(fn: (this: This, value: V, key: K, collection: this) => value is V2, thisArg: This): Collection<K, V2>;
    filter<This>(fn: (this: This, value: V, key: K, collection: this) => boolean, thisArg: This): this;
    partition<K2 extends K>(fn: (value: V, key: K, collection: this) => key is K2): [Collection<K2, V>, Collection<Exclude<K, K2>, V>];
    partition<V2 extends V>(fn: (value: V, key: K, collection: this) => value is V2): [Collection<K, V2>, Collection<K, Exclude<V, V2>>];
    partition(fn: (value: V, key: K, collection: this) => boolean): [this, this];
    partition<This, K2 extends K>(fn: (this: This, value: V, key: K, collection: this) => key is K2, thisArg: This): [Collection<K2, V>, Collection<Exclude<K, K2>, V>];
    partition<This, V2 extends V>(fn: (this: This, value: V, key: K, collection: this) => value is V2, thisArg: This): [Collection<K, V2>, Collection<K, Exclude<V, V2>>];
    partition<This>(fn: (this: This, value: V, key: K, collection: this) => boolean, thisArg: This): [this, this];
    flatMap<T>(fn: (value: V, key: K, collection: this) => Collection<K, T>): Collection<K, T>;
    flatMap<T, This>(fn: (this: This, value: V, key: K, collection: this) => Collection<K, T>, thisArg: This): Collection<K, T>;
    map<T>(fn: (value: V, key: K, collection: this) => T): T[];
    map<This, T>(fn: (this: This, value: V, key: K, collection: this) => T, thisArg: This): T[];
    mapValues<T>(fn: (value: V, key: K, collection: this) => T): Collection<K, T>;
    mapValues<This, T>(fn: (this: This, value: V, key: K, collection: this) => T, thisArg: This): Collection<K, T>;
    some(fn: (value: V, key: K, collection: this) => boolean): boolean;
    some<T>(fn: (this: T, value: V, key: K, collection: this) => boolean, thisArg: T): boolean;
    every<K2 extends K>(fn: (value: V, key: K, collection: this) => key is K2): this is Collection<K2, V>;
    every<V2 extends V>(fn: (value: V, key: K, collection: this) => value is V2): this is Collection<K, V2>;
    every(fn: (value: V, key: K, collection: this) => boolean): boolean;
    every<This, K2 extends K>(fn: (this: This, value: V, key: K, collection: this) => key is K2, thisArg: This): this is Collection<K2, V>;
    every<This, V2 extends V>(fn: (this: This, value: V, key: K, collection: this) => value is V2, thisArg: This): this is Collection<K, V2>;
    every<This>(fn: (this: This, value: V, key: K, collection: this) => boolean, thisArg: This): boolean;
    reduce<T>(fn: (accumulator: T, value: V, key: K, collection: this) => T, initialValue?: T): T;
    each(fn: (value: V, key: K, collection: this) => void): this;
    each<T>(fn: (this: T, value: V, key: K, collection: this) => void, thisArg: T): this;
    tap(fn: (collection: this) => void): this;
    tap<T>(fn: (this: T, collection: this) => void, thisArg: T): this;
    clone(): this;
    concat(...collections: Collection<K, V>[]): this;
    equals(collection: Collection<K, V>): boolean;
    sort(compareFunction?: (firstValue: V, secondValue: V, firstKey: K, secondKey: K) => number): this;
    intersect(other: Collection<K, V>): Collection<K, V>;
    difference(other: Collection<K, V>): Collection<K, V>;
    sorted(compareFunction?: (firstValue: V, secondValue: V, firstKey: K, secondKey: K) => number): this;
}
export default Collection;
