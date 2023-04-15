import { Finisher } from '../types'

/**
 * Checks whether all elements of the sequence satisfy the given predicate.
 * @param predicate A function that will test an element
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   all(item => item < 2)
 * )
 * console.log(result) // Outputs false
 */
export function all<T>(predicate: (item: T) => boolean): Finisher<T, boolean> {
  return function (source) {
    for (const element of source) {
      if (!predicate(element)) {
        return false
      }
    }

    return true
  }
}
