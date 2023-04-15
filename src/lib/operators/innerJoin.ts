import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'
import { crossJoin } from './crossJoin'
import { where } from './where'

export function innerJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O]> {
  return function (source) {
    return query(
      from(source),
      crossJoin(other),
      where(([left, right]) => on(left, right))
    )
  }
}
