import { Operator } from '../types'

export function append<T>(element: T): Operator<T, T> {
  return function (source) {
    return function* () {
      for (const item of source()) {
        yield item
      }

      yield element
    }
  }
}
