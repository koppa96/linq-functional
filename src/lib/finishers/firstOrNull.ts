import { Finisher } from '../types'

/**
 * Returns the first element that matches the given predicate.
 * If no predicate is specified it simply returns the first element of the sequence.
 * If the sequence is empty or has no elements that match the predicate, `null` is returned.
 * @param predicate A function that will test an element
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   firstOrNull(value => value > 1)
 * )
 * console.log(result) // Outputs 2
 */
export function firstOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    for (const element of source) {
      if (!predicate || predicate(element)) {
        return element
      }
    }

    return null
  }
}
