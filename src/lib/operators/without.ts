import { contains } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { EqualityCheck, Operator, defaultEqualityCheck } from '../types'

/**
 * Omits the provided elements from the source `Iterable`.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param other The elements to omit
 * @param equalityCheck An optional function to check if 2 elements are considered equal
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   without([3, 5]),
 *   toArray()
 * ) // [1, 2, 4]
 */
export function without<T>(
  other: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          const existsInOther = query(
            from(other),
            contains(element, equalityCheck)
          )

          if (!existsInOther) {
            yield element
          }
        }
      },
    }
  }
}
