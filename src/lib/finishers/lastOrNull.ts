import { Finisher } from '../types'

/**
 * Returns the last element that matches the given predicate.
 * If no predicate is specified it simply returns the last element of the sequence.
 * If the sequence is empty or has no elements that match the predicate, `null` is returned.
 * @param predicate A function that will test an element
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   last(value => value < 3)
 * )
 * console.log(result) // Outputs 2
 */
export function lastOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    let last: T | null = null
    for (const element of source) {
      if (!predicate || predicate(element)) {
        last = element
      }
    }
    return last
  }
}
