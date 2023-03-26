import { Finisher } from '../types'

export function last<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    let last: T | null = null
    for (const element of source) {
      if (!predicate || predicate(element)) {
        last = element
      }
    }
    return last
  }
}
