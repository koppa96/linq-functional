import { Operator } from '../types'

export function where<T>(
  predicate: (element: T, index: number) => boolean
): Operator<T, T> {
  return function (source) {
    return function* () {
      let i = 0
      for (const element of source()) {
        if (predicate(element, i)) {
          yield element
        }
        i++
      }
    }
  }
}
