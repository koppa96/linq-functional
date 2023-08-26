import { Finisher } from '../types'
import { lastOrNull } from './lastOrNull'

/**
 * Returns the last element that matches the given predicate.
 * If no predicate is specified it simply returns the last element of the sequence.
 * Throws an error if the sequence is empty or no elements match the predicate.
 * @param predicate A function that will test an element
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   last(value => value < 3)
 * )
 * console.log(result) // Outputs 2
 */
export function last<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = lastOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching element.')
    }

    return result
  }
}
