import { Starter } from '../types'

export function repeat<T>(element: T, times: number): Starter<T> {
  return function () {
    return {
      *[Symbol.iterator]() {
        for (let i = 0; i < times; i++) {
          yield element
        }
      },
    }
  }
}
