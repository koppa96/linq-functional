import { from } from '../starters/from'
import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'
import { query } from '../query'
import { append } from './append'

/**
 * Calculates the set union of the source sequence and the target sequence. If
 * an element is present in either of the sequences it will be included in the result.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param elements The elements to compare the source sequence to
 * @param equalityCheck An optional function to check if 2 elements are considered equal
 * @example
 * const result = query(
 *   from([1, 2, 3, 4, 5]),
 *   union([2, 4, 6, 8]),
 *   toArray()
 * ) // [1, 2, 3, 4, 5, 6, 8]
 */
export function union<T>(
  elements: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return query(from(source), append(elements), distinct(equalityCheck))
  }
}
