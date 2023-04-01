import { Operator } from '../types'

export function leftJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O | null]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          let matchFound = false
          for (const otherElement of other) {
            if (on(element, otherElement)) {
              matchFound = true
              yield [element, otherElement]
            }
          }

          if (!matchFound) {
            yield [element, null]
          }
        }
      },
    }
  }
}
