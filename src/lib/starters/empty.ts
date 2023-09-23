import { Starter } from '../types'

const _empty = {
  *[Symbol.iterator]() {},
}

/**
 * Creates a `Starter` that returns an empty `Iterable`.
 * @example
 * const result = query(empty<number>(), toArray()) // []
 */
export function empty<T>(): Starter<T> {
  return function () {
    return _empty
  }
}
