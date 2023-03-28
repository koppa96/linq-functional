import { Operator } from '../types'

export function prepend<T>(element: T): Operator<T, T> {
  return function (source) {
    return function* () {
      yield element
      for (const item of source()) {
        yield item
      }
    }
  }
}
