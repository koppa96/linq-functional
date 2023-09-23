import { Starter } from '../types'

/**
 * Creates a function that returns an empty `Iterable`.
 * @example
 * const result = query(empty<number>(), toArray()) // []
 */
export function empty<T>(): Starter<T> {
  return function () {
    return {
      *[Symbol.iterator]() {},
    }
  }
}
