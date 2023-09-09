import { Finisher } from '../types'
import { sumOf } from './sumOf'

/**
 * Calculates the sum of items in a number sequence.
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   sum()
 * )
 * console.log(result) // Outputs 6
 */
export function sum(): Finisher<number, number> {
  return sumOf(x => x)
}
