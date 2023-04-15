import { Operator } from '../types'

export function append<T>(elements: Iterable<T>): Operator<T, T>
export function append<T>(...elements: T[]): Operator<T, T>
export function append<T>(elements: Iterable<T>): Operator<T, T> {
  return function (source) {
    return {
      *[Symbol.iterator]() {
        for (const element of source) {
          yield element
        }

        for (const element of elements) {
          yield element
        }
      },
    }
  }
}
