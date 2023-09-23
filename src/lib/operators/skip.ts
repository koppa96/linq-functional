import { query } from '../query'
import { from } from '../starters/from'
import { Operator } from '../types'
import { skipWhile } from './skipWhile'

/**
 * Omits the first elements of an `Iterable`.
 * @param amount The amount of elements to omit
 * @example
 * const result = query(
 *   from([1, 2, 3, 4]),
 *   skip(2),
 *   toArray()
 * ) // [3, 4]
 */
export function skip<T>(amount: number): Operator<T, T> {
  return function (source) {
    return query(
      from(source),
      skipWhile((_, i) => i < amount)
    )
  }
}
