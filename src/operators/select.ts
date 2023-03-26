import { Operator } from '../types'

export function select<T, R>(
  selector: (element: T, index: number) => R
): Operator<T, R> {
  return function* (source): Iterable<R> {
    let i = 0
    for (const element of source) {
      yield selector(element, i)
      i++
    }
  }
}
