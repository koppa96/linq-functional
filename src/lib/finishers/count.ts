import { Finisher } from '../types'

/**
 * Determines how many elements in the source sequence satisfy the given predicate.
 * If there is no predicate given, the operator will simply return the number of total elements in the sequence.
 * @param predicate A function that will test an element if it should be counted or not
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   count(value => value < 3)
 * )
 * console.log(result) // Outputs 2
 */
export function count<T>(
  predicate?: (element: T) => boolean
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
