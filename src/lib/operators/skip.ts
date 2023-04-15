import { query } from '../query'
import { from } from '../starters/from'
import { Operator } from '../types'
import { skipWhile } from './skipWhile'

export function skip<T>(amount: number): Operator<T, T> {
  return function (source) {
    return query(
      from(source),
      skipWhile((_, i) => i < amount)
    )
  }
}
