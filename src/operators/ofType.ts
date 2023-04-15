import { Operator } from '../types'

export function ofType<T>(
  typeGuard: (item: unknown) => item is T
): Operator<unknown, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          if (typeGuard(element)) {
            yield element
          }
        }
      },
    }
  }
}
