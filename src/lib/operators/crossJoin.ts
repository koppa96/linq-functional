import { Operator } from '../types'

/**
 * Produces the cartesian product of the source sequence, and the provided
 * sequence.
 * @param other The sequence to join to the source sequence
 * @example
 * const result = query(
 *   from(['apple', 'banana']),
 *   crossJoin([1, 2, 3]),
 *   toArray()
 * )
 * console.log(result) // Outputs [['apple', 1], ['apple', 2], ['apple', 3], ['banana', 1], ['banana', 2], ['banana', 3]]
 */
export function crossJoin<T, O>(other: Iterable<O>): Operator<T, [T, O]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          for (const otherElement of other) {
            yield [element, otherElement]
          }
        }
      },
    }
  }
}
