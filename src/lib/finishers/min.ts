import { Comparator, defaultComparator, Finisher } from '../types'
import { minBy } from './minBy'

/**
 * Returns the smallest element of the sequence.
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 elements is the greater one.
 * @example
 * const result = query(
 *   from([3, 5, 6, 2]),
 *   min()
 * )
 * console.log(result) // Outputs 2
 */
export function min<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null> {
  return minBy(x => x, comparator)
}
