import { Finisher } from '../types'

export function count<T>(
  predicate?: (element: T) => boolean
): Finisher<T, number> {
  return function (source) {
    let result = 0
    for (const item of source) {
      if (!predicate || predicate(item)) {
        result++
      }
    }
    return result
  }
}
