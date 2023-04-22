import { Finisher } from '../types'
import { firstOrNull } from './firstOrNull'

/**
 * Returns the first element that matches the given predicate.
 * If no predicate is specified it simply returns the first element of the sequence.
 * Throws an error if the sequence is empty or no elements match the predicate.
 * @param predicate A function that will test an element
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   first(value => value > 1)
 * )
 * console.log(result) // Outputs 2
 */
export function first<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = firstOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching elements.')
    }

    return result
  }
}
