import { Finisher } from '../types'

/**
 * Creates a `Finisher` that checks if any item of the source `Iterable` satisfies the given predicate.
 * If there is no predicate given, the operator will simply check if the source is empty.
 * @param predicate A function that tests an item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   any(item => item < 2)
 * ) // true
 */
export function any<T>(predicate?: (item: T) => boolean): Finisher<T, boolean> {
  return function (source) {
    for (const item of source) {
      if (!predicate || predicate(item)) {
        return true
      }
    }

    return false
  }
}
