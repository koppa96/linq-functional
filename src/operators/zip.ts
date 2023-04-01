import { Operator } from '../types'

export function zip<T, O>(other: Iterable<O>): Operator<T, [T, O]> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        const iterator1 = source[Symbol.iterator]()
        const iterator2 = other[Symbol.iterator]()

        while (true) {
          const result1 = iterator1.next()
          const result2 = iterator2.next()

          if (result1.done) {
            return
          }

          if (result2.done) {
            return
          }

          yield [result1.value, result2.value]
        }
      },
    }
  }
}
