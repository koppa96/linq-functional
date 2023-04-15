import { Finisher } from '../types'

export function firstOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    for (const element of source) {
      if (!predicate || predicate(element)) {
        return element
      }
    }

    return null
  }
}
