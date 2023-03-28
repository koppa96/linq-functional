import { Finisher } from '../types'

export function toArray<T>(): Finisher<T, T[]> {
  return function (source) {
    const result: T[] = []
    for (const element of source()) {
      result.push(element)
    }
    return result
  }
}
