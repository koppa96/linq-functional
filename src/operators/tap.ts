import { Operator } from '../types'

export function tap<T>(
  action: (element: T, index: number) => void
): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        let i = 0
        for (const element of source) {
          action(element, i)
          yield element
          i++
        }
      },
    }
  }
}
