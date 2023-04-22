import { Comparator, defaultComparator, Finisher } from '../types'
import { maxBy } from './maxBy'

/**
 * Returns the greatest element of the sequence.
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 elements is the greater one.
 * @returns A finisher operator configured by the given parameters
 * @example
 * const result = query(
 *   from([3, 5, 6, 2]),
 *   max()
 * )
 * console.log(result) // Outputs 6
 */
export function max<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null> {
  return maxBy(x => x, comparator)
}
