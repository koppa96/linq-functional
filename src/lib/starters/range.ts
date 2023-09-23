import { Starter } from '../types'

/**
 * Creates an `Iterable` that contains number values from start value. Each
 * value is greater than the value before.
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
