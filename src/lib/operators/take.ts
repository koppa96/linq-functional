import { query } from '../query'
import { from } from '../starters/from'
import { Operator } from '../types'
import { takeWhile } from './takeWhile'

/**
 * Creates an `Operator` that yields the first items of the source `Iterable`.
 * If there are not enough items in the source, all items are yielded.
 * @remarks This operator uses deferred execution. The actual operation
 * will be evaluated each time when the query result is iterated over.
 * @param amount The amount of items to include in the result
 * @example
 * const result = query(
 *   from([1, 2, 3, 4]),
 *   take(3),
 *   toArray()
 * ) // [1, 2, 3]
 */
export function take<T>(amount: number): Operator<T, T> {
  return function (source) {
    return query(
      from(source),
      takeWhile((_, i) => i < amount)
    )
  }
}
