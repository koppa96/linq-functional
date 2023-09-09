import { Finisher } from '../types'

/**
 * Calculates a single aggregated value by applying the accumulator function to each item of the sequence.
 * @param seed The initial value of the aggregation
 * @param accumulator A function that receives the partial result and the actual item
 * and computes the next result
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   aggregate(0, (result, item) => result + item)
 * )
 * console.log(result) // Outputs 6
 */
export function aggregate<T, R>(
  seed: R,
  accumulator: (result: R, item: T) => R
): Finisher<T, R> {
  return function (source) {
    for (const element of source) {
      seed = accumulator(seed, element)
    }
    return seed
  }
}
