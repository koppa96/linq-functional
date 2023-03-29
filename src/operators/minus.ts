import { any } from '../finishers/any'
import { query } from '../query'
import { from } from '../starters/from'
import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'

export function minus<T>(
  elements: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        return distinct(equalityCheck)({
          *[Symbol.iterator]() {
            for (const element of source) {
              if (
                !query(
                  from(elements),
                  any(otherElement => equalityCheck(element, otherElement))
                )
              ) {
                yield element
              }
            }
          },
        })
      },
    }
  }
}
