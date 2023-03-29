import { from } from '../starters/from'
import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'
import { query } from '../query'
import { append } from './append'

export function union<T>(
  elements: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return query(from(source), append(elements), distinct(equalityCheck))
  }
}
