export type Starter<T> = () => Iterable<T>
export type Operator<T, R> = (source: () => Iterable<T>) => () => Iterable<R>
export type Finisher<T, R> = (source: () => Iterable<T>) => R

export type EqualityCheck<T> = (left: T, right: T) => boolean
export type Comparator<T> = (left: T, right: T) => number

export const defaultEqualityCheck: EqualityCheck<any> = (left, right) =>
  left === right
export const defaultComparator: Comparator<any> = (left, right) =>
  left < right ? -1 : left === right ? 0 : 1
