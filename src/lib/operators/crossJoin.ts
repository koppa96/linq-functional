import { Operator } from '../types'

/**
 * Creates an `Operator` that produces the cartesian product of the source sequence
 * and the provided sequence.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param other The sequence to join to the source sequence
 * @example
 * const result = query(
 *   from(['apple', 'banana']),
 *   crossJoin([1, 2, 3]),
 *   toArray()
 * ) // [['apple', 1], ['apple', 2], ['apple', 3], ['banana', 1], ['banana', 2], ['banana', 3]]
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
