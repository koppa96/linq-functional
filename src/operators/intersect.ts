import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { distinct } from './distinct'

export function intersect<T>(
  elements: Iterable<T>,
  equalityCheck: EqualityCheck<T> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return distinct(equalityCheck)({
      *[Symbol.iterator]() {
        for (const sourceElement of source) {
          for (const element of elements) {
            if (equalityCheck(sourceElement, element)) {
              yield element
            }
          }
        }
      },
    })
  }
}
