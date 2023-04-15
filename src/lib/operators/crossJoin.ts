import { Operator } from '../types'

export function crossJoin<T, O>(other: Iterable<O>): Operator<T, [T, O]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          for (const otherElement of other) {
            yield [element, otherElement]
          }
        }
      },
    }
  }
}
