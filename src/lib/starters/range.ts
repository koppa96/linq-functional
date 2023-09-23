import { Starter } from '../types'

/**
 * Creates a `Starter` that generates sequential number values from start value.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param start The starting value of the `Iterable`
 * @param count The amount of values to generate
 * @example
 * const result = query(
 *   range(10, 5),
 *   toArray()
 * ) // [10, 11, 12, 13, 14]
 */
export function range(start: number, count: number): Starter<number> {
  return function () {
    return {
      *[Symbol.iterator]() {
        for (let i = 0; i < count; i++) {
          yield start + i
        }
      },
    }
  }
}
