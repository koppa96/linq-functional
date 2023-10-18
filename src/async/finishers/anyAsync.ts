import { AsyncFinisher } from '../types'

export function anyAsync<T>(
  predicate?: (item: T) => boolean
): AsyncFinisher<T, boolean> {
  return async function (source) {
    for await (const item of source) {
      if (!predicate || predicate(item)) {
        return true
      }
    }

    return false
  }
}
