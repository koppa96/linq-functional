import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinctBy } from './distinctBy'

export function distinct<T>(
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return distinctBy<T, T>(x => x, equalityCheck)(source)
  }
}
