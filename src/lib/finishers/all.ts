import { Finisher } from '../types'

/**
 * Creates a `Finisher` that checks whether all items of the source `Iterable` satisfy the given predicate.
 * @param predicate A function that tests an item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   all(item => item < 2)
 * ) // false
 */
export function all<T>(predicate: (item: T) => boolean): Finisher<T, boolean> {
  return function (source) {
    for (const item of source) {
      if (!predicate(item)) {
        return false
      }
    }

    return true
  }
}
