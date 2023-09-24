import { Finisher } from '../types'
import { averageOf } from './averageOf'

/**
 * Creates a `Finisher` that calculates the average of items of an `Iterable<number>` source.
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   average()
 * ) // 2
 */
export function average(): Finisher<number, number> {
  return averageOf(x => x)
}
