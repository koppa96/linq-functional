import { AsyncFinisher } from '../types'

export function allAsync<T>(
  predicate: (item: T) => boolean
): AsyncFinisher<T, boolean> {
  return async function (source) {
    for await (const item of source) {
      if (!predicate(item)) {
        return false
      }
    }

    return true
  }
}
