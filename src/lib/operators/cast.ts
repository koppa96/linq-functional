import { Operator } from '../types'

export function cast<T>(): Operator<unknown, T> {
  return function (source) {
    return source as Iterable<T>
  }
}
