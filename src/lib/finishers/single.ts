import { Finisher } from '../types'
import { singleOrNull } from './singleOrNull'

/**
 * Returns the only element that matches the given predicate.
 * If no predicate is specified it simply returns the only element of the sequence.
 * If there are multiple elements in the sequence and no predicate is given, or there
 * are multiple elements that match the predicate, an error is thrown. The function also
 * throws an error if the sequence is empty or has no matching element.
 * @param predicate A function that will test an element
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   single(value => value > 2)
 * )
 * console.log(result) // Outputs 3
 */
export function single<T>(predicate?: (item: T) => boolean): Finisher<T, T> {
  return function (source) {
    const result = singleOrNull(predicate)(source)
    if (result === null) {
      throw new Error('The sequence contains no matching element.')
    }

    return result
  }
}
