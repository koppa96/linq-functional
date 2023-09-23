import { toArray } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'

/**
 * Returns a new sequence that contains the items of the source sequence in reverse order.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @example
 * const result = query(
 *   from([1, 2, 3]),
 *   reverse(),
 *   toArray()
 * ) // [3, 2, 1]
 */
export function reverse<T>(): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const result = query(from(source), toArray())
        for (let i = result.length - 1; i >= 0; i--) {
          yield result[i]
        }
      },
    }
  }
}
