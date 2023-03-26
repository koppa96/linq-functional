import { Operator } from '../types'

export function skip<T>(amount: number): Operator<T, T> {
  return function* (source) {
    let skipped = 0
    for (const element of source) {
      if (skipped < amount) {
        skipped++
        continue
      }

      yield element
    }
  }
}
