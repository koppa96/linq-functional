import { Starter } from '../types'

export function from<T>(source: Iterable<T>): Starter<T> {
  return function () {
    return source
  }
}
