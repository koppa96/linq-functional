import { Finisher } from '../types'
import { averageOf } from './averageOf'

/**
 * Calculates the average of items in a number sequence.
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   average()
 * )
 * console.log(result) // Outputs 2
 */
export function average(): Finisher<number, number> {
  return averageOf(x => x)
}
