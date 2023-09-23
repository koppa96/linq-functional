import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'
import { skip } from './skip'
import { take } from './take'

/**
 * Gets the elements between two indices as an `Iterable`.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param startIndex The index of the first element (inclusive)
 * @param endIndex The index of the last element (exclusive)
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   slice(1, 3),
 *   toArray()
 * ) // [2, 3]
 */
export function slice<T>(startIndex: number, endIndex: number): Operator<T, T> {
  return function (source) {
    return query(from(source), skip(startIndex), take(endIndex - startIndex))
  }
}
