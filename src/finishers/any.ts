import { Finisher } from '../types'

export function any<T>(predicate?: (item: T) => boolean): Finisher<T, boolean> {
  return function (source) {
    for (const element of source) {
      if (!predicate || predicate(element)) {
        return true
      }
    }

    return false
  }
}
