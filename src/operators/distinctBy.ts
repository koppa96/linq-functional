import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { from } from '../starters/from'
import { any } from '../finishers/any'

export function distinctBy<T, R>(
  selector: (item: T) => R,
  equalityCheck: EqualityCheck<R> = defaultEqualityCheck
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const visitedElements: R[] = []
        for (const element of source) {
          const value = selector(element)
          const currentElementVisited = any<R>(x => equalityCheck(x, value))(
            visitedElements
          )
          if (currentElementVisited) {
            continue
          }

          yield element
          visitedElements.push(value)
        }
      },
    }
  }
}
