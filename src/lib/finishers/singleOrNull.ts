import { Finisher } from '../types'

/**
 * Returns the only element that matches the given predicate.
 * If no predicate is specified it simply returns the only element of the sequence.
 * If there are multiple elements in the sequence and no predicate is given, or there
 * are multiple elements that match the predicate, an error is thrown. If the sequence
 * is empty or has no matching elements to the predicate, it returns `null`.
 * @param predicate A function that will test an element
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   singleOrNull(value => value > 2)
 * )
 * console.log(result) // Outputs 3
 */
export function singleOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    let result: T | null = null
    for (const element of source) {
      if (!predicate || predicate(element)) {
        if (result === null) {
          result = element
        } else {
          throw new Error(
            'The sequence contains more than one matching element.'
          )
        }
      }
    }

    return result
  }
}
