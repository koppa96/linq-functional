import { Finisher } from '../types'

/**
 * Checks if any element of the source sequence satisfies the given predicate.
 * If there is no predicate given, the operator will simply check if the source sequence is empty.
 * @param predicate A function that will test an element
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   any(item => item < 2)
 * )
 * console.log(result) // Outputs true
 */
export function any<T>(predicate?: (item: T) => boolean): Finisher<T, boolean> {
  return function (source) {
    for (const element of source) {
      if (!predicate || predicate(element)) {
        return true
      }
    }

    return false
  }
}
