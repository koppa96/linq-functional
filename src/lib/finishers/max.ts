import { Comparator, defaultComparator, Finisher } from '../types'
import { maxBy } from './maxBy'

/**
 * Creates a `Finisher` that returns the greatest item of the source `Iterable`.
 * @param comparator An optional comparator function that can be used
 * to determine which of 2 items is the greater one.
 * @example
 * const result = query(
 *   from([3, 5, 6, 2]),
 *   max()
 * ) // 6
 */
export function max<T>(
  comparator: Comparator<T> = defaultComparator
): Finisher<T, T | null> {
  return maxBy(x => x, comparator)
}
