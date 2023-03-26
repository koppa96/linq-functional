import { Operator } from '../types'

export function take<T>(amount: number): Operator<T, T> {
  return function* (source) {
    let index = 0
    for (const element of source) {
      if (index === amount) {
        return
      }

      yield element
      index++
    }
  }
}
