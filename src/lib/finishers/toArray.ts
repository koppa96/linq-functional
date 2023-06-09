import { Finisher } from '../types'

/**
 * Iterates the source sequence and returns it as an array.
 * It can be used to materialize / get a snapshot of the result of a query.
 * @returns A finisher operator
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   select(value => value * value),
 *   toArray()
 * )
 * console.log(result) // Outputs [1, 4, 9]
 */
export function toArray<T>(): Finisher<T, T[]> {
  return function (source) {
    const result: T[] = []
    for (const element of source) {
      result.push(element)
    }
    return result
  }
}
