/**
 * Typescript Utility Functions.
 * eslint-disable
 */
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type Diff<T, K> = Pick<T, Exclude<keyof T, keyof K>>;
