import { Finisher } from '../types'

/**
 * Creates a `Finisher` that returns the last item that matches the given predicate.
 * If no predicate is specified it simply returns the last item of the source `Iterable`.
 * If the source is empty or has no items that match the predicate, `null` is returned.
 * @param predicate A function that will test an item
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   lastOrNull(value => value < 1)
 * ) // null
 */
export function lastOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    let last: T | null = null
    for (const item of source) {
      if (!predicate || predicate(item)) {
        last = item
      }
    }
    return last
  }
}
