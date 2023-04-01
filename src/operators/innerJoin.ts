import { Operator } from '../types'

export function innerJoin<T, O>(
  other: Iterable<O>,
  on: (left: T, right: O) => boolean
): Operator<T, [T, O]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          for (const otherElement of other) {
            if (on(element, otherElement)) {
              yield [element, otherElement]
            }
          }
        }
      },
    }
  }
}
