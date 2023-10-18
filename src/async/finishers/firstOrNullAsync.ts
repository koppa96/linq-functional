import { AsyncFinisher } from '../types'

export function firstOrNullAsync<T>(
  predicate?: (item: T) => boolean
): AsyncFinisher<T, T | null> {
  return async function (source) {
    for await (const element of source) {
      if (!predicate || predicate(element)) {
        return element
      }
    }

    return null
  }
}
