import { Finisher } from '../types'

export function toSet<T>(): Finisher<T, Set<T>> {
  return function (source) {
    const set = new Set<T>()
    for (const element of source()) {
      set.add(element)
    }
    return set
  }
}
