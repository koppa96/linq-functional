import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinctBy } from './distinctBy'

/**
 * Creates an `Operator` that filters out the duplicated items from the source sequence.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param equalityCheck An optional function to check if 2 items are considered equal
 * @example
 * const result = query(
 *   from([1, 2, 1, 3, 3, 5, 2]),
 *   distinct(),
 *   toArray()
 * ) // [1, 2, 3, 5]
 */
export function distinct<T>(
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return distinctBy<T, T>(x => x, equalityCheck)(source)
  }
}
