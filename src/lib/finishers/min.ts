import { Comparator, defaultComparator, Finisher } from '../types'
import { minBy } from './minBy'

/**
 * Creates a `Finisher` that returns the smallest item of the source `Iterable`.
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 items is the greater one.
 * @example
 * const result = query(
 *   from([3, 5, 6, 2]),
 *   min()
 * ) // 2
 */
export function min<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null> {
  return minBy(x => x, comparator)
}
