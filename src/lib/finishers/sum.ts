import { Finisher } from '../types'
import { sumOf } from './sumOf'

/**
 * Creates a `Finisher` that calculates the sum of items in the source `Iterable<number>`.
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   sum()
 * ) // 6
 */
export function sum(): Finisher<number, number> {
  return sumOf(x => x)
}
