import { Operator } from '../types'

export function takeWhile<T>(
  predicate: (item: T, index: number) => boolean
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          if (!predicate(element, i)) {
            return
          }

          yield element
          i++
        }
      },
    }
  }
}
