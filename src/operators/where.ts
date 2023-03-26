import { Operator } from '../types'

export function where<T>(predicate: (element: T) => boolean): Operator<T, T> {
  return function* (source) {
    for (const element of source) {
      if (predicate(element)) {
        yield element
      }
    }
  }
}
