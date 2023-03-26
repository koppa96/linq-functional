import { Finisher } from '../types'

export function all<T>(predicate: (item: T) => boolean): Finisher<T, boolean> {
  return function (source) {
    for (const element of source) {
      if (!predicate(element)) {
        return false
      }
    }

    return true
  }
}
