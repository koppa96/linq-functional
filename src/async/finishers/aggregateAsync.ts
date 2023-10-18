import { AsyncFinisher } from '../types'

export function aggregateAsync<T, R>(
  seed: R,
  accumulator: (result: R, item: T) => R
): AsyncFinisher<T, R> {
  return async function (source) {
    for await (const item of source) {
      seed = accumulator(seed, item)
    }
    return seed
  }
}
