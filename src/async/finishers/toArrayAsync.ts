import { AsyncFinisher } from '../types'

export function toArrayAsync<T>(): AsyncFinisher<T, T[]> {
  return async function (source) {
    const result: T[] = []

    for await (const item of source) {
      result.push(item)
    }

    return result
  }
}
