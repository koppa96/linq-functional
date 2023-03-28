import { Operator } from '../types'

export function prepend<T>(element: T): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        yield element
        for (const item of source) {
          yield item
        }
      },
    }
  }
}
