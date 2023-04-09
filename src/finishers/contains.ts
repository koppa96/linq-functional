import { query } from '../query'
import { from } from '../starters'
import { EqualityCheck, Finisher, defaultEqualityCheck } from '../types'
import { any } from './any'

export function contains<T>(
  element: T,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Finisher<T, boolean> {
  return function (source) {
    return query(
      from(source),
      any(item => equalityCheck(item, element))
    )
  }
}
