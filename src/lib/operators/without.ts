import { contains } from '../finishers'
import { query } from '../query'
import { from } from '../starters'
import { EqualityCheck, Operator, defaultEqualityCheck } from '../types'

export function without<T>(
  other: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          const existsInOther = query(
            from(other),
            contains(element, equalityCheck)
          )

          if (!existsInOther) {
            yield element
          }
        }
      },
    }
  }
}
