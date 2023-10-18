import { AsyncFinisher } from '../types'

export function countAsync<T>(
  predicate?: (item: T) => boolean
): AsyncFinisher<T, number> {
  return async function (source) {
    let result = 0
    for await (const item of source) {
      if (!predicate || predicate(item)) {
        result++
      }
    }
    return result
  }
}
