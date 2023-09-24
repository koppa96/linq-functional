import { Finisher } from '../types'
import { firstOrNull } from './firstOrNull'

/**
 * Creates a `Finisher` that returns the first item that matches the given predicate.
 * If no predicate is specified, it simply returns the first item of the source `Iterable`.
 * Throws an error if there were no matching items in the source.
 * @param predicate A function that will test an item
 * @example
 * const result = query(
 *   from(['apple', 'banana', 'lemon']),
 *   first()
 * ) // 'apple'
 */
export function first<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = firstOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching items.')
    }

    return result
  }
}
