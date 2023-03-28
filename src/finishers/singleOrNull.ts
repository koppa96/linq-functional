import { Finisher } from '../types'

export function singleOrNull<T>(
  predicate?: (item: T) => boolean
): Finisher<T, T | null> {
  return function (source) {
    let result: T | null = null
    for (const element of source()) {
      if (!predicate || predicate(element)) {
        if (result === null) {
          result = element
        } else {
          throw new Error(
            'The sequence contains more than one matching element.'
          )
        }
      }
    }

    return result
  }
}
