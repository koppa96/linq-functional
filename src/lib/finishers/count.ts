import { Finisher } from '../types'

/**
 * Creates a `Finisher` that determines how many items in the source `Iterable` satisfy the given predicate.
 * If there is no predicate given, the operator will simply return the number of total items in the source.
 * @param predicate A function that will test an item if it should be counted or not
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   count(value => value < 3)
 * ) // 2
 */
export function count<T>(
  predicate?: (item: T) => boolean
): Finisher<T, number> {
  return function (source) {
    let result = 0
    for (const item of source) {
      if (!predicate || predicate(item)) {
        result++
      }
    }
    return result
  }
}
