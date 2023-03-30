import { query } from '../query'
import { from } from '../starters/from'
import { Operator } from '../types'
import { takeWhile } from './takeWhile'

export function take<T>(amount: number): Operator<T, T> {
  return function (source) {
    return query(
      from(source),
      takeWhile((_, i) => i < amount)
    )
  }
}
