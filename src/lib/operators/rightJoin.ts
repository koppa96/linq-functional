import { query } from '../query'
import { from } from '../starters'
import { Operator } from '../types'
import { leftJoin } from './leftJoin'
import { select } from './select'

export function rightJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T | null, O]> {
  return function (source) {
    return query(
      from(other),
      leftJoin(source, (left, right) => on(right, left)),
      select(([left, right]) => [right, left])
    )
  }
}
