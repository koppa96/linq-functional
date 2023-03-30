import { Operator } from '../types'

export function skipWhile<T>(
  predicate: (item: T, index: number) => boolean
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let skip = true
        let i = 0
        for (const element of source) {
          skip = skip && predicate(element, i)
          i++

          if (skip) {
            continue
          }

          yield element
        }
      },
    }
  }
}
