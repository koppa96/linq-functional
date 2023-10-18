import { AsyncFinisher } from '../types'

export function lastOrNullAsync<T>(
  predicate?: (item: T) => boolean
): AsyncFinisher<T, T | null> {
  return async function (source) {
    let last: T | null = null
    for await (const item of source) {
      if (!predicate || predicate(item)) {
        last = item
      }
    }
    return last
  }
}
