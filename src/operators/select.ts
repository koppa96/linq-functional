import { Operator } from '../types'

export function select<T, R>(selector: (element: T) => R): Operator<T, R> {
  return function* (source): Iterable<R> {
    for (const element of source) {
      yield selector(element)
    }
  }
}
