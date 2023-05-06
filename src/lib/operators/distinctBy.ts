import { defaultEqualityCheck, EqualityCheck, Operator } from '../types'
import { from } from '../starters'
import { any } from '../finishers'
import { query } from '../query'

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
          const currentElementVisited = query(
            from(visitedElements),
            any(item => equalityCheck(value, item))
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
