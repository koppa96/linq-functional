import { Finisher } from '../types'

export function aggregate<T, R>(
  seed: R,
  accumulator: (result: R, item: T) => R
): Finisher<T, R> {
  return function (source) {
    for (const element of source) {
      seed = accumulator(seed, element)
    }
    return seed
  }
}
